import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../Model/cartItem';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from './Firebase/auth.service';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor(private db: AngularFireDatabase,private authService: AuthService) {
    // Subscribe to auth state changes, to load each user cart according to uid
    this.authService.user$.subscribe(user => {
      if (user) {
        this.loadUserCart(user.uid);
      } else {
        //.next() method allows to emit a new data to all subscribers of the subject.
        //In this case, it emits an empty array, if the user is not logged in.
        this.cartItems.next([]);
      }
    });
  }

  loadUserCart(userId: string) {
    //.valueChanges() returns an observable that emits the data at the specified path carts/userID as an object.
    //.pipe(take(1)) ensures that we only listen for the first emission, then automatically unsubscribe.
    this.db.object(`carts/${userId}`).valueChanges()
      .pipe(take(1))
      .subscribe((cart: any) => {
        if (cart) {
          this.cartItems.next(cart.items || []);
        } else {
          this.cartItems.next([]);
        }
      });
  }

  saveCartToFirebase(userId: string, items: CartItem[]) {
    this.db.object(`carts/${userId}`).set({ items });
  }

  addToCart(item: CartItem) {
    //Get the user auth state once right now, do the work, then autmatically unsubscribe
    this.authService.user$.pipe(take(1)).subscribe(user => {
      if (!user) return;
  
      const currentItems = this.cartItems.value;
      //Check if the item being added already exists in the cart
      const existingItem = currentItems.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        currentItems.push(item);
      }
      
      //Create a new shallow copy of array that contains cart items
      const updatedItems = [...currentItems];
      //Emit the updated cart items to all subscribers of the cartItems subject
      this.cartItems.next(updatedItems);
      //Save the updated cart items to the Firebase database
      this.saveCartToFirebase(user.uid, updatedItems);
    });
  }

  removeFromCart(itemId: number) {
    this.authService.user$.pipe(take(1)).subscribe(user => {
      if (!user) return;

      //filter() creates a new shallow copy automatically, it does not mutate the original array
      //So, no need to explicitly create a new shallow copy
      const currentItems = this.cartItems.value.filter(item => item.id !== itemId);
      this.cartItems.next(currentItems);
      this.saveCartToFirebase(user.uid, currentItems);
    });
  }

  clearCart() {
    this.authService.user$.pipe(take(1)).subscribe(user => {
      if (!user) return;

      this.cartItems.next([]);
      this.saveCartToFirebase(user.uid, []);
    });
  }

  getTotalItems(): number {
    //reduce() loops through each item in array and adds item quantity to total.
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    //reduce() loops through each item in array and adds item price * quantity to total.
    return this.cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}

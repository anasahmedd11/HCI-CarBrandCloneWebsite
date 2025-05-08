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
        this.cartItems.next([]);
      }
    });
  }

  private loadUserCart(userId: string) {
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

  private saveCartToFirebase(userId: string, items: CartItem[]) {
    this.db.object(`carts/${userId}`).set({ items });
  }

  addToCart(item: CartItem) {
    this.authService.user$.pipe(take(1)).subscribe(user => {
      if (!user) return;
  
      const currentItems = this.cartItems.value;
      const existingItem = currentItems.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        currentItems.push(item);
      }
      
      const updatedItems = [...currentItems];
      this.cartItems.next(updatedItems);
      this.saveCartToFirebase(user.uid, updatedItems);
    });
  }

  removeFromCart(itemId: number) {
    this.authService.user$.pipe(take(1)).subscribe(user => {
      if (!user) return;

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
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }
}

import { Component } from '@angular/core';
import { CartItem } from '../Model/cartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  totalItems = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.totalItems = this.cartService.getTotalItems();
    });
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}

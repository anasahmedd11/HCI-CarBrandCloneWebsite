import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/Firebase/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  totalCartItems = 0;

  constructor(private cartService: CartService, private authService: AuthService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(() => {
      this.totalCartItems = this.cartService.getTotalItems();
    });
  }

  async onLogout() {
    await this.authService.logout();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Porsche_Website';

  constructor(private router: Router) {}

  isLoginOrSignup(): boolean {
    const currentPath = this.router.url;
    return currentPath === '/login' || currentPath === '/signup' || currentPath === '/not-found' ;
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  //Returns an Observable of the authentication state.
  //Automatically emits whenever the authentication state changes
  //Useful for real-time subscription in components using async pipe
  get user$() {
    return this.afAuth.authState;
  }

  // Email/Password Auth
  async signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Logout
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  //Returns a Promise that resolves to the current authenticated user, or null if not logged in.
  //Useful when you need to fetch the user once, as it does not auto-update when auth state changes.
  getCurrentUser() {
    return this.afAuth.currentUser;
  }
} 
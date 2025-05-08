import { Component } from '@angular/core';
import { AuthService } from '../../services/Firebase/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  user$!: Observable<any>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}

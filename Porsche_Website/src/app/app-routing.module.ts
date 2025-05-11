import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './HomePage/home-page.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DealershipPageComponent } from './dealership-page/dealership-page.component';
import { TestDrivePageComponent } from './TestDrivePage/test-drive-page.component';
import { JobsPageComponent } from './JobsPage/jobs-page.component';
import { InternshipsPageComponent } from './InternshipPage/internships-page.component';
import { PartsComponent } from './parts/parts.component';
import { CarmodelsPageComponent } from './carmodels-page/carmodels-page.component';
import { CarmodelsDetailsPageComponent } from './carmodels-details-page/carmodels-details-page.component';
import { CartComponent } from './cart-page/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard], title: 'Home'},
  {path: 'dealership', component: DealershipPageComponent, canActivate: [AuthGuard], title: 'Dealership'},
  {path: 'testdrive', component: TestDrivePageComponent, canActivate: [AuthGuard], title: 'Test Drive'},
  {path: 'jobs', component: JobsPageComponent, canActivate: [AuthGuard], title: 'Jobs'},
  {path: 'internships', component: InternshipsPageComponent, canActivate: [AuthGuard], title: 'Internships'},
  {path: 'parts', component: PartsComponent, canActivate: [AuthGuard], title: 'Parts'},
  {path: 'models', component: CarmodelsPageComponent, canActivate: [AuthGuard], title: 'Models'},
  { path: 'details/:id', component: CarmodelsDetailsPageComponent, canActivate: [AuthGuard],title: 'Details' },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], title: 'Cart' },
  //Redirects the user to /login when they visit the root URL of the app (http://localhost:4200/).
  //pathMatch: 'full': Ensures that the redirection only happens when the full path is empty
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'not-found', component: PageNotFoundComponent},
  //Wildcard route matches any path that isn't defined in the routes array
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

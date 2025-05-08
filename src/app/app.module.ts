import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestDrivePageComponent } from './TestDrivePage/test-drive-page.component';
import { DealershipPageComponent } from './dealership-page/dealership-page.component';
import { DealershipLocationComponent } from './dealership-location/dealership-location.component';
import { JobsPageComponent } from './JobsPage/jobs-page.component';
import { InternshipsPageComponent } from './InternshipPage/internships-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeCarouselComponent } from './HomePage/Carousel/home-carousel.component';
import { HomePageComponent } from './HomePage/home-page.component';
import { HomeComponent1Component } from './HomePage/Component1/home-component1/home-component1.component';
import { HomeComponent2Component } from './HomePage/Component2/home-component2/home-component2.component';
import { HomeComponent3Component } from './HomePage/Component3/home-component3/home-component3.component';
import { HomeComponent4Component } from './HomePage/Component4/home-component4/home-component4.component';
import { InternshipTopComponentComponent } from './InternshipPage/TopComponent/internship-top-component/internship-top-component.component';
import { InternshipTableComponentComponent } from './InternshipPage/internship-table-component/internship-table-component.component';
import { TestDriveFormComponentComponent } from './TestDrivePage/Form/test-drive-form-component/test-drive-form-component.component';
import { TestDriveModalComponentComponent } from './TestDrivePage/Modal/test-drive-modal-component/test-drive-modal-component.component';
import { JobTableComponentComponent } from './JobsPage/TableComponent/job-table-component/job-table-component.component';
import { JobTopComponentComponent } from './JobsPage/TopComponent/job-top-component/job-top-component.component';
import { PartsComponent } from './parts/parts.component';
import { CarmodelsPageComponent } from './carmodels-page/carmodels-page.component';
import { CarmodelsDetailsPageComponent } from './carmodels-details-page/carmodels-details-page.component';
import { CartComponent } from './cart-page/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    NavbarComponent,
    PageNotFoundComponent,
    TestDrivePageComponent,
    DealershipPageComponent,
    DealershipLocationComponent,
    JobsPageComponent,
    InternshipsPageComponent,
    FooterComponent,
    HomeCarouselComponent,
    HomePageComponent,
    HomeComponent1Component,
    HomeComponent2Component,
    HomeComponent3Component,
    HomeComponent4Component,
    InternshipTopComponentComponent,
    InternshipTableComponentComponent,
    TestDriveFormComponentComponent,
    TestDriveModalComponentComponent,
    JobTableComponentComponent,
    JobTopComponentComponent,
    PartsComponent,
    CarmodelsPageComponent,
    CarmodelsDetailsPageComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

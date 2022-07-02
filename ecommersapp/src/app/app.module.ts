import {  NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import{MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';



import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { HiringComponent } from './components/hiring/hiring.component';
import { TechinicalComponent } from './components/techinical/techinical.component';
import { CertificationComponent } from './components/certification/certification.component';
import { MembershipComponent } from './components/membership/membership.component';
import { ForumComponent } from './components/forum/forum.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { AboutComponent } from './components/about/about.component';
import { HackathonComponent } from './components/hackathon/hackathon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    HomeComponent,
    CourseComponent,
    HiringComponent,
    TechinicalComponent,
    CertificationComponent,
    MembershipComponent,
    ForumComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AboutComponent,
    HackathonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent,CertificationComponent,HiringComponent],
  entryComponents:[ForumComponent]
})


export class AppModule {
  //MatDialogModule: any;
 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {ValidateService} from './services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import{AuthGuard} from './guard/authGuard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register',component: RegisterComponent },
  {
    path: 'login',
    component: LoginComponent
},
  { path: 'profile',  component: ProfileComponent,canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule
  ],
  providers: [ValidateService,FlashMessagesService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

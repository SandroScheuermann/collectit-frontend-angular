import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { EmailConfirmationComponent } from './views/register/email-confirmation/email-confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { animation: 'home' } },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { animation: 'login' }},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard], data: { animation: 'register' } },
  { path: 'register/email-confirmation', component: EmailConfirmationComponent, canActivate: [AuthGuard], data: { animation: 'register' } },
  { path: 'welcome', component: WelcomeComponent, data: { animation: 'welcome' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

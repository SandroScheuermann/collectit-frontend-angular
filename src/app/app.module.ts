import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DefaultinputComponent } from './shared/defaultinput/defaultinput.component';
import { RegisterComponent } from './views/register/register.component';
import { DefaultbuttonComponent } from './shared/defaultbutton/defaultbutton.component';
import { LoginComponent } from './views/login/login.component';
import { MicroLoaderComponent } from './animations/microloader/microloader.component';
import { AnimatedbackgroundComponent } from './animations/animatedbackground/animatedbackground.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { EmailConfirmationComponent } from './views/register/email-confirmation/email-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DefaultinputComponent,
    RegisterComponent,
    DefaultbuttonComponent,
    LoginComponent,
    MicroLoaderComponent,
    AnimatedbackgroundComponent,
    WelcomeComponent,
    EmailConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

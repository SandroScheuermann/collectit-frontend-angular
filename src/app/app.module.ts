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
import { PasswordinputComponent } from './shared/passwordinput/passwordinput.component';
import { LoginComponent } from './views/login/login.component';
import { MicroLoaderComponent } from './animations/microloader/microloader.component';

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
    PasswordinputComponent,
    LoginComponent,
    MicroLoaderComponent
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

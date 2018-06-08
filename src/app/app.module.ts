import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, NavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

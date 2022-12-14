import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MainPortal/Header/header/header.component';
import { FooterComponent } from './MainPortal/Footer/footer/footer.component';
import { HomeComponent } from './MainPortal/Home/home/home.component';
import { ShopComponent } from './MainPortal/Shop/shop/shop.component';
import { PageNotFoundComponent } from './MainPortal/Page-Not-Found/page-not-found/page-not-found.component';
import { DirectivesComponent } from './MainPortal/directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    PageNotFoundComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

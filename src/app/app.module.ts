import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AProposComponent } from './a-propos/a-propos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { BeersComponent } from './home-page/beers/beers.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemShortComponent } from './item-short/item-short.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogComponent } from './home-page/catalog/catalog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BoutiqueComponent,
    DetailComponent,
    AProposComponent,
    ContactComponent,
    ItemComponent,
    ItemShortComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    BeersComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

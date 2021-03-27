
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// module
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ContactComponent } from './components/contact/contact.component';
import { SpecificationsComponent } from './components/specifications/specifications.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { SwiperComponent } from './components/swiper/swiper.component';

// swiper
//import { SwiperModule } from 'swiper/angular';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { InfoComponent } from './components/info/info.component';
import { TabsComponent } from './components/tabs/tabs.component';

// http client module
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WalletComponent,
    ContactComponent,
    SpecificationsComponent,
    ExchangeComponent,
    RoadmapComponent,
    DocumentsComponent,
    SwiperComponent,
    CarouselComponent,
    CardsComponent,
    InfoComponent,
    TabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxUsefulSwiperModule,
    HttpClientModule
    //SwiperModule


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

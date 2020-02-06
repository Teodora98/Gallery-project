import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselGalleryComponent } from './carousel-gallery/carousel-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RippleLoaderModule } from 'ng-spinners';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselGalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RippleLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


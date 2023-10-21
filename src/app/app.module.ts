import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcomicComponent } from './components/addcomic/addcomic.component';
import { AddrecordComponent } from './components/addrecord/addrecord.component';
import { StoryComponent } from './components/story/story.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DccomicsComponent } from './components/dccomics/dccomics.component';
import { DcpipePipe } from './pipes/dcpipe.pipe';
import { MarvelcomicsComponent } from './components/marvelcomics/marvelcomics.component';
import { SingleissueComponent } from './components/singleissue/singleissue.component';
import { ImagecomicsComponent } from './components/imagecomics/imagecomics.component';
import { IndycomicsComponent } from './components/indycomics/indycomics.component';
import { VinylComponent } from './components/vinyl/vinyl.component';
import { GoldenComponent } from './components/golden/golden.component';
import { GoldenPipe } from './pipes/golden.pipe';
import { SilverPipe } from './pipes/silver.pipe';
import { BronzePipe } from './pipes/bronze.pipe';
import { ModernPipe } from './pipes/modern.pipe';
import { SilverComponent } from './components/silver/silver.component';
import { BronzeComponent } from './components/bronze/bronze.component';
import { ModernComponent } from './components/modern/modern.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    MainComponent,
    AddcomicComponent,
    AddrecordComponent,
    StoryComponent,
    DccomicsComponent,
    DcpipePipe,
    MarvelcomicsComponent,
    SingleissueComponent,
    ImagecomicsComponent,
    IndycomicsComponent,
    VinylComponent,
    GoldenComponent,
    GoldenPipe,
    SilverPipe,
    BronzePipe,
    ModernPipe,
    SilverComponent,
    BronzeComponent,
    ModernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

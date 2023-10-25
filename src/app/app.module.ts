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
import { DcgoldenComponent } from './components/dc/dcgolden/dcgolden.component';
import { DcsilverComponent } from './components/dc/dcsilver/dcsilver.component';
import { DcbronzeComponent } from './components/dc/dcbronze/dcbronze.component';
import { DcmodernComponent } from './components/dc/dcmodern/dcmodern.component';
import { MarvelgoldenComponent } from './components/marvel/marvelgolden/marvelgolden.component';
import { MarvelsilverComponent } from './components/marvel/marvelsilver/marvelsilver.component';
import { MarvelbronzeComponent } from './components/marvel/marvelbronze/marvelbronze.component';
import { MarvelmodernComponent } from './components/marvel/marvelmodern/marvelmodern.component';
import { MarvelpipePipe } from './pipes/marvelpipe.pipe';
import { HomePanelComponent } from './panel/home-panel/home-panel.component';
import { DcPanelComponent } from './panel/dc-panel/dc-panel.component';
import { DccomicsComponent } from './components/dccomics/dccomics.component';
import { MarvelPanelComponent } from './panel/marvel-panel/marvel-panel.component';
import { SearchDisplayComponent } from './components/search-display/search-display.component';



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
    ModernComponent,
    DcgoldenComponent,
    DcsilverComponent,
    DcbronzeComponent,
    DcmodernComponent,
    MarvelgoldenComponent,
    MarvelsilverComponent,
    MarvelbronzeComponent,
    MarvelmodernComponent,
    MarvelpipePipe,
    HomePanelComponent,
    DcPanelComponent,
    MarvelPanelComponent,
    SearchDisplayComponent,
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

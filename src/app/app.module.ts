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
    StoryComponent
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

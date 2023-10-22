import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddcomicComponent } from './components/addcomic/addcomic.component';
import { AddrecordComponent } from './components/addrecord/addrecord.component';
import { DccomicsComponent } from './components/dccomics/dccomics.component';
import { MarvelcomicsComponent } from './components/marvelcomics/marvelcomics.component';
import { ImagecomicsComponent } from './components/imagecomics/imagecomics.component';
import { IndycomicsComponent } from './components/indycomics/indycomics.component';
import { VinylComponent } from './components/vinyl/vinyl.component';
import { GoldenComponent } from './components/golden/golden.component';
import { SilverComponent } from './components/silver/silver.component';
import { BronzeComponent } from './components/bronze/bronze.component';
import { ModernComponent } from './components/modern/modern.component';
import { DcgoldenComponent } from './components/dc/dcgolden/dcgolden.component';
import { DcsilverComponent } from './components/dc/dcsilver/dcsilver.component';
import { DcbronzeComponent } from './components/dc/dcbronze/dcbronze.component';
import { DcmodernComponent } from './components/dc/dcmodern/dcmodern.component';
import { MarvelsilverComponent } from './components/marvel/marvelsilver/marvelsilver.component';
import { MarvelbronzeComponent } from './components/marvel/marvelbronze/marvelbronze.component';
import { MarvelmodernComponent } from './components/marvel/marvelmodern/marvelmodern.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addcomic', component: AddcomicComponent},
  {path: 'addrecord', component: AddrecordComponent},
  {path: 'dccomics', component: DccomicsComponent},
  {path: 'marvelcomics', component: MarvelcomicsComponent},
  {path: 'imagecomics', component: ImagecomicsComponent},
  {path: 'othercomics', component: IndycomicsComponent},
  {path: 'vinyl', component: VinylComponent},
  {path: 'golden', component: GoldenComponent},
  {path: 'silver', component: SilverComponent},
  {path: 'bronze', component: BronzeComponent},
  {path: 'modern', component: ModernComponent},
  {path: 'dcgolden', component: DcgoldenComponent},
  {path: 'dcsilver', component: DcsilverComponent},
  {path: 'dcbronze', component: DcbronzeComponent},
  {path: 'dcmodern', component: DcmodernComponent},
  
  {path: 'marvelgolden', component: DcgoldenComponent},
  {path: 'marvelsilver', component: MarvelsilverComponent},
  {path: 'marvelbronze', component: MarvelbronzeComponent},
  {path: 'marvelmodern', component: MarvelmodernComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

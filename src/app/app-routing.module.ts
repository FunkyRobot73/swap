import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddcomicComponent } from './components/addcomic/addcomic.component';
import { AddrecordComponent } from './components/addrecord/addrecord.component';
import { DccomicsComponent } from './components/dccomics/dccomics.component';
import { MarvelcomicsComponent } from './components/marvelcomics/marvelcomics.component';
import { ImagecomicsComponent } from './components/imagecomics/imagecomics.component';
import { IndycomicsComponent } from './components/indycomics/indycomics.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addcomic', component: AddcomicComponent},
  {path: 'addrecord', component: AddrecordComponent},
  {path: 'dccomics', component: DccomicsComponent},
  {path: 'marvelcomics', component: MarvelcomicsComponent},
  {path: 'imagecomics', component: ImagecomicsComponent},
  {path: 'othercomics', component: IndycomicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

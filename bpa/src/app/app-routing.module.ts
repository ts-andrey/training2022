import { AppAboutComponent } from './main/app-about/app-about.component';
import { PlaceFormComponent } from './main/place-form/place-form.component';
import { PlaceListComponent } from './main/place-list/place-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppAboutComponent },
  { path: 'place-list/:placeType', component: PlaceListComponent },
  { path: 'place-form', component: PlaceFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

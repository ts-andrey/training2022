import { SortDataService } from './services/sort-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './header/nav/nav.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { TitleComponent } from './header/title/title.component';
import { PlaceManagerComponent } from './header/place-manager/place-manager.component';
import { FilterComponent } from './header/place-manager/filter/filter.component';
import { SorterComponent } from './header/place-manager/sorter/sorter.component';
import { MakerComponent } from './header/place-manager/maker/maker.component';
import { PlaceTypeComponent } from './header/place-manager/place-type/place-type.component';
import { PlaceListComponent } from './main/place-list/place-list.component';
import { PlaceComponent } from './main/place/place.component';
import { LicenseComponent } from './footer/license/license.component';
import { PlaceLoaderComponent } from './main/place-loader/place-loader.component';
import { DeleteBtnComponent } from './main/place/delete-btn/delete-btn.component';
import { EditBtnComponent } from './main/place/edit-btn/edit-btn.component';
import { PlaceFormComponent } from './main/place-form/place-form.component';
import { PlaceNameComponent } from './main/place-form/place-name/place-name.component';
import { PlaceDescriptionComponent } from './main/place-form/place-description/place-description.component';
import { PlaceLocationComponent } from './main/place-form/place-location/place-location.component';
import { AppAboutComponent } from './main/app-about/app-about.component';
import { FilterPlacesPipe } from './pipes/filter-places.pipe';
import { SortPlacesPipe } from './pipes/sort-places.pipe';
import { DataService } from './services/data.service';
import { FilterPlacesService } from './services/filter-places.service';
import { PlaceImageComponent } from './main/place-form/place-image/place-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LogoComponent,
    NavComponent,
    UserMenuComponent,
    TitleComponent,
    PlaceManagerComponent,
    FilterComponent,
    SorterComponent,
    MakerComponent,
    PlaceTypeComponent,
    PlaceListComponent,
    PlaceComponent,
    LicenseComponent,
    PlaceLoaderComponent,
    DeleteBtnComponent,
    EditBtnComponent,
    PlaceFormComponent,
    PlaceNameComponent,
    PlaceDescriptionComponent,
    PlaceLocationComponent,
    AppAboutComponent,

    FilterPlacesPipe,
    SortPlacesPipe,
    PlaceImageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService, SortDataService, FilterPlacesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

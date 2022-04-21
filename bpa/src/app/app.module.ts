import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { PlaceComponent } from './main/place-list/place/place.component';
import { LicenseComponent } from './footer/license/license.component';
import { PlaceLoaderComponent } from './main/place-list/place-loader/place-loader.component';

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
    PlaceLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

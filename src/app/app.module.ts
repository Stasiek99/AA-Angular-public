import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {CountryDataService} from "./country-search-engine/services/country-data.service";
import {CountrySearchEngineModule} from "./country-search-engine/country-search-engine.module";
import {GeneralModule} from "./general/general.module";
import {HomeModule} from "./home/home.module";
import {AppRoutingModule} from "./app-routing.module";
import {CreateNewUserModule} from "./create-new-user/create-new-user.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountrySearchEngineModule,
    GeneralModule,
    HomeModule,
    AppRoutingModule,
    CreateNewUserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

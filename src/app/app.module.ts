import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {CountryDataService} from "./country-search-engine/services/country-data.service";
import {CountrySearchEngineModule} from "./country-search-engine/country-search-engine.module";
import {GeneralModule} from "./general/general.module";
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountrySearchEngineModule,
    GeneralModule,
    HomeModule
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

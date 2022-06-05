import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {CountryDataService} from "./country-data.service";
import { CountrySearchEngineComponent } from './country-search-engine/country-search-engine.component';
import { SearchInputComponent } from './country-search-engine/search-input/search-input.component';
import { SearchAutocompleteComponent } from './country-search-engine/search-autocomplete/search-autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    CountrySearchEngineComponent,
    SearchInputComponent,
    SearchAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

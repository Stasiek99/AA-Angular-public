import {NgModule} from "@angular/core";

import { CountrySearchEngineComponent } from './country-search-engine.component';
import {SearchInputComponent} from "./search-input/search-input.component";
import {SearchAutocompleteComponent} from "./search-autocomplete/search-autocomplete.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CountryDataService} from "./services/country-data.service";
import {AppComponent} from "../app.component";

@NgModule({
  declarations: [
    CountrySearchEngineComponent,
    SearchInputComponent,
    SearchAutocompleteComponent
  ],
  exports: [
    CountrySearchEngineComponent,
    SearchInputComponent,
    SearchAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})

export class CountrySearchEngineModule{}

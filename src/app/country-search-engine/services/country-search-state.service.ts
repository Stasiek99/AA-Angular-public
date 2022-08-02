import {Injectable} from "@angular/core";

import {CountrySearchedInterface} from "../interfaces/country-searched.interface";
import {CountrySearchLocalStorageService} from "./country-search-local-storage.service";

@Injectable()
export class CountrySearchStateService {
  localStorageValue: CountrySearchedInterface[];
  private readonly defaultValue = [];
  constructor(private countrySearchLocalStorageService: CountrySearchLocalStorageService) {
    const tmp = this.countrySearchLocalStorageService.getData();
    this.localStorageValue = tmp ?? this.defaultValue
}

  onSubmitted(searchInput: CountrySearchedInterface){
    this.localStorageValue.push(searchInput);
    this.countrySearchLocalStorageService.setItem(this.localStorageValue)
  }

  onSearchHistoryComponentInitialized(){
    return this.localStorageValue;
  }
}

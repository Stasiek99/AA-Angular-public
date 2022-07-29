import {Injectable} from "@angular/core";

import {CountrySearchedInterface} from "../interfaces/country-searched.interface";
import {CountrySearchLocalStorageService} from "./country-search-local-storage.service";

@Injectable()
export class CountrySearchStateService {
  constructor(private countrySearchLocalStorageService: CountrySearchLocalStorageService,
              private localStorageValue: CountrySearchedInterface[] = countrySearchLocalStorageService.getData()){}

  onSubmitted(searchInput: CountrySearchedInterface){
    this.localStorageValue.push(searchInput);
    this.countrySearchLocalStorageService.setItem(this.localStorageValue)
  }
}

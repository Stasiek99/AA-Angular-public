import {Injectable} from "@angular/core";

import {CountrySearchedInterface} from "../interfaces/country-searched.interface";
import {CountrySearchLocalStorageService} from "./country-search-local-storage.service";

@Injectable()
export class CountrySearchStateService {
  localStorageValue: CountrySearchedInterface[]
  constructor(private countrySearchLocalStorageService: CountrySearchLocalStorageService)
              {this.localStorageValue = this.countrySearchLocalStorageService.getData()}

  onSubmitted(searchInput: CountrySearchedInterface){
    this.localStorageValue.push(searchInput);
    this.countrySearchLocalStorageService.setItem(this.localStorageValue)
  }
}

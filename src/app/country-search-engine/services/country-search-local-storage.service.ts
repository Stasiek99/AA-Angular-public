import {Injectable} from "@angular/core";
import {CountrySearchedInterface} from "../interfaces/country-searched.interface";

@Injectable()
export class CountrySearchLocalStorageService{
  private readonly countriesStorageItemKey = "List of searched Countries";

  setItem(listOfSearchedCountries: CountrySearchedInterface[]){
    window.localStorage.setItem(this.countriesStorageItemKey, JSON.stringify(listOfSearchedCountries));
  }

  getData(){
    const objectToParse = window.localStorage.getItem(this.countriesStorageItemKey) as string;
    return JSON.parse(objectToParse);
  }
}

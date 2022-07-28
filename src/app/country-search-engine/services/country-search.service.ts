import {Injectable} from "@angular/core";

import {CountrySearchedInterface} from "../interfaces/country-searched.interface";

@Injectable()
export class CountrySearchService{


  private countriesSearchedList: CountrySearchedInterface[] | any = [];
  private uniqueSearchedCountry: CountrySearchedInterface | undefined;
  private readonly date = new Date();
  private readonly isoDate = this.date.toISOString();


  onSubmitted(searchInput: string){
    this.uniqueSearchedCountry = {
      input: searchInput,
      date: this.isoDate
    }
    this.countriesSearchedList.push(this.uniqueSearchedCountry);
    window.localStorage.setItem("List of searched Countries", this.countriesSearchedList.JSON.stringify());
  }
}

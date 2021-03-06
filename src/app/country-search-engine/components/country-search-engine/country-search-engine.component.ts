import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {CountryDataService} from "../../services/country-data.service";
import {CountryElement} from "../../interfaces/country-element-interface";
import {CountrySearchStateService} from "../../services/country-search-state.service";
import {CountrySearchedInterface} from "../../interfaces/country-searched.interface";

@Component({
  selector: 'app-country-search-engine',
  templateUrl: './country-search-engine.component.html',
  styleUrls: ['./country-search-engine.component.scss']
})
export class CountrySearchEngineComponent implements OnInit {
  inputValue: string = '';
  allCountries: CountryElement[] = [];
  filteredCountries: CountryElement[] = [];
  private readonly urlFragment = "https://www.google.com/search?q=";

  constructor(private http: HttpClient, private countryDataService: CountryDataService, private countrySearchService: CountrySearchStateService) {
  }

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
      })
  }

  onSubmitted(): void{
    const tmp = this.createUniqueSearchedCountry(this.inputValue);
    this.countrySearchService.onSubmitted(tmp);
    this.redirectToGoogle();
  }

  onSearchBarInputChanged(searchString: string ){
    this.inputValue = searchString;
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onAutoCompleteElementsSelected(labelElement: string): void{
    this.inputValue = labelElement;
    const tmp = this.createUniqueSearchedCountry(this.inputValue);
    this.countrySearchService.onSubmitted(tmp);
    this.redirectToGoogle();
  }

  private getFilteredCountries(searchString: string ){
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }
  private createUniqueSearchedCountry(input: string): CountrySearchedInterface {
    return {
      input,
      date: (new Date()).toISOString()
    };
  }

  private redirectToGoogle(){
    const searchRedirectUrlWithQuery = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }
}

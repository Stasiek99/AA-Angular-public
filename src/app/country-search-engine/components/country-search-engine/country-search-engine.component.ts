import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {CountryDataService} from "../../services/country-data.service";
import {CountryElement} from "../../interfaces/country-element-interface";
import {CountrySearchService} from "../../services/country-search.service";

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

  constructor(private http: HttpClient, private countryDataService: CountryDataService, private countrySearchService: CountrySearchService) {
  }

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
      })
  }

  onSubmitted(): void{
    this.redirectToGoogle();
  }

  onSearchBarInputChanged(searchString: string ){
    this.inputValue = searchString;
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onAutoCompleteElementsSelected(labelElement: string): void{
    this.inputValue = labelElement;
    this.countrySearchService.onSubmitted(this.inputValue);
    this.redirectToGoogle();
  }

  private getFilteredCountries(searchString: string ){
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  private redirectToGoogle(){
    const searchRedirectUrlWithQuery = this.urlFragment + this.inputValue;
    this.countrySearchService.onSubmitted(this.inputValue);
    window.location.href = searchRedirectUrlWithQuery;
  }
}

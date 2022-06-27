import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CountryDataService} from "../country-data.service";
import {CountryElement} from "../country-element-interface";

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

  constructor(private http: HttpClient, private countryDataService: CountryDataService) {
  }

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
      })
  }

  private getFilteredCountries(searchString: string ){
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  onSubmitted(): void{
    this.redirectToGoogle();
  }

  private redirectToGoogle(){
    const searchRedirectUrlWithQuery = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }

  onSearchBarInputChanged(searchString: string ){
    this.inputValue = searchString;
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onAutoCompleteElementsSelected(labelElement: string): void{
    this.inputValue = labelElement;
    this.redirectToGoogle();
  }
}

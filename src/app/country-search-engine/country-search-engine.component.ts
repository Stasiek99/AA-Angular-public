import {Component, OnInit, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CountryDataService} from "../country-data.service";
import {CountryElement} from "../country-element-interface";

@Component({
  selector: 'app-country-search-engine',
  templateUrl: './country-search-engine.component.html',
  styleUrls: ['./country-search-engine.component.scss']
})
export class CountrySearchEngineComponent implements OnInit {
  private readonly urlFragment = "https://www.google.com/search?q=";

  constructor(private http: HttpClient, private countryDataService: CountryDataService) {
  }

  ngOnInit(): void {
  }

  allCountries: CountryElement[] = [];

  private redirectToGoogle(): void{
    const searchRedirectUrlWithQuery = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }

  private getFilteredCountries(searchString: string){
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }
}

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
  private readonly urlFragment = "https://www.google.com/search?q=";

  constructor(private http: HttpClient, private countryDataService: CountryDataService) {
  }

  filteredCountriesParent: CountryElement[] = [];
  inputValueParent: string = '';
  allCountriesParent: CountryElement[] = [];

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountriesParent = countries;
      })
  }

  redirectToGoogle(searchString: string){
    const searchRedirectUrlWithQuery = this.urlFragment + this.inputValueParent;
    window.location.href = searchRedirectUrlWithQuery;
  }

}

import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CountrySearchEngineComponent} from "./country-search-engine/country-search-engine.component";

import {CountryElement} from "./country-element-interface";
import {CountryDataService} from "./country-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
      })
  }

}

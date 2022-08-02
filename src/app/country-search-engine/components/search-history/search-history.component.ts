import { Component, OnInit } from '@angular/core';

import {CountrySearchStateService} from "../../services/country-search-state.service";
import {CountrySearchedInterface} from "../../interfaces/country-searched.interface";

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {
  constructor(private countrySearchStateService: CountrySearchStateService) { }
  localStorageValue: CountrySearchedInterface[] = [];
  displayedColumns: string[] = ["input", "date"];
  dataSource: CountrySearchedInterface[] = [];

  ngOnInit(): void {
    this.localStorageValue = this.countrySearchStateService.onSearchHistoryComponentInitialized()
    for(let i=0; i<this.localStorageValue.length; i++){
      this.dataSource.push({input: this.localStorageValue[i].input, date: this.localStorageValue[i].date});
    }
  }
}

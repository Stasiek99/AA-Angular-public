import { Component, OnInit } from '@angular/core';
import {CountryElement} from "../../country-element-interface";


@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss']
})
export class SearchAutocompleteComponent implements OnInit {
  filteredCountries: CountryElement[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onSelectAutoCompleteElements(labelElement: string): void{
    this.inputValue = labelElement;
    this.redirectToGoogle()
  }

}

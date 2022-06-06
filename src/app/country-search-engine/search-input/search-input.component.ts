import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() inputValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  onChangesSearchBarInput(searchString: string){
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onSubmit(): void{
    this.redirectToGoogle();
  }
}

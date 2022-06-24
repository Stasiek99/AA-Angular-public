import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss']
})
export class SearchAutocompleteComponent implements OnInit {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any;
  @Output() autoComplete = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  onSelectAutoCompleteElements(searchString: string): void{
    this.autoComplete.emit(searchString);
  }
}

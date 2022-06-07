import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss']
})
export class SearchAutocompleteComponent implements OnInit {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any[];
  @Output() newTabGoogle = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectAutoCompleteElements(labelElement: string): void{
    this.inputValue = labelElement;
    this.newTabGoogle.emit(labelElement);
  }
}

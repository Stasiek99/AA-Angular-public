import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any;
  @Output() searchBarChanged = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<unknown>();

  onChangesSearchBarInput(searchString: string) {
    this.searchBarChanged.emit(searchString);
  }

  onSubmit(): void{
    this.submitEvent.emit();
  }
}

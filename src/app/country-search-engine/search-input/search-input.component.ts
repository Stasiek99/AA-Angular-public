import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any;
  @Output() searchBarChanged = new EventEmitter<string>();
  @Output() submit = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(){
  }

  onChangesSearchBarInput(searchString: string) {
    this.searchBarChanged.emit(searchString);
  }

  onSubmit(): void{
    this.submit.emit();
  }
}
////////////////////////

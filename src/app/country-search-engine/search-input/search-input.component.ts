import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() inputValue!: string;
  @Input() allCountries!: any[];
  @Input() filteredCountries!: any[];
  @Output() newTabGoogle = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  onChangesSearchBarInput(searchString: string){
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onSubmit(searchString: string): void{
    this.newTabGoogle.emit(searchString);
  }

  private getFilteredCountries(searchString: string){
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }

}

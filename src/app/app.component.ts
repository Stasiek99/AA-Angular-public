import {Component} from '@angular/core';

import {listOfCountries} from "./db.mock";
import {Country} from "./country.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  private readonly urlFragment = "https://www.google.com/search?q=";

  filtredCountries: Country[] = [];
  inputValue: string = '';

  onChangesSearchBarInput(searchString: string){
    this.filtredCountries = this.getFiltredCountries(searchString);
  }

  onSelectAutoCompleteElements(labelElement: string): void{
    this.inputValue = labelElement;
    this.redirectToGoogle()
  }


  onSubmit(): void{
    this.redirectToGoogle();
  }

  private redirectToGoogle(): void{
    const searchRedirectUrlWithQuery = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }


  private getFiltredCountries(searchString: string){
    return listOfCountries.filter(elem => elem.label.includes(searchString));
  }


}





















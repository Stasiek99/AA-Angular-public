import {Component, OnInit} from '@angular/core';

import {UserInterface} from "../interfaces/user-interface";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: UserInterface = {
    name: "Stasiek",
    login: "Staasiek99",
    password: "12345",
    country: "Poland",
    age: 23
  };

  ngOnInit(){
    console.log(this.user)
  }
}

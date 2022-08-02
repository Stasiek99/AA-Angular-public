import { Component, OnInit } from '@angular/core';
import {UserStateService} from "../../../user/user-state.service";
import {UserInterface} from "../../interfaces/user-interface";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  constructor(private userStateService: UserStateService) {}
  localStorageValue: UserInterface[] = [];
  displayedColumns: string[] = ["name", "login", "country", "age"];
  dataSource: UserInterface[] = [];

  ngOnInit(): void {
    this.localStorageValue = this.userStateService.onUsersListComponentInitialized();
    for(let i=0; i<this.localStorageValue.length; i++){
      this.dataSource.push({name: this.localStorageValue[i].name, login: this.localStorageValue[i].login, password: "", country: this.localStorageValue[i].country, age: this.localStorageValue[i].age})
    }
  }

}

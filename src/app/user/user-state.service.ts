import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";
import {UserLocalStorageService} from "./user-local-storage.service";

@Injectable({
  providedIn: "root"
})

export class UserStateService {
  localStorageValue: UserInterface[];
  private readonly defaultValue = [];
  constructor(private userLocalStorageService: UserLocalStorageService) {
    const tmp = this.userLocalStorageService.getUsers();
    this.localStorageValue = tmp ?? this.defaultValue;
  }

  addUser(user: UserInterface){
    console.log(user);
    console.log(this.localStorageValue)
    this.localStorageValue.push(user);
    this.userLocalStorageService.addUser(this.localStorageValue);
  }

  getLastAddedUser(): UserInterface | null{
    return this.localStorageValue[this.localStorageValue.length-1];
  }

  deleteLastAddedUser(){
    this.localStorageValue.pop();
    this.userLocalStorageService.deleteLastAddedUser(this.localStorageValue);
  }

  editLastAddedUser(editedUser: UserInterface){
    this.localStorageValue.pop();
    this.localStorageValue.push(editedUser);
    this.userLocalStorageService.editLastAddedUser(this.localStorageValue);
  }

  onUsersListComponentInitialized(){
    return this.localStorageValue;
  }
}

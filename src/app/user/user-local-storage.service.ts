import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";

@Injectable({
  providedIn: "root"
})

export class UserLocalStorageService {
  createdUser: UserInterface | null = null;

  setUser(user: UserInterface) {
    this.createdUser = user;
    window.localStorage.setItem("User", JSON.stringify(user))
  }

  getUser(): UserInterface | null{
    let localStorageFields = window.localStorage["User"];
    localStorageFields = JSON.parse(localStorageFields);

    return localStorageFields;
  }
}

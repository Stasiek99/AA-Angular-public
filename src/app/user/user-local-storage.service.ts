import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";

@Injectable({
  providedIn: "root"
})

export class UserLocalStorageService {
  private readonly localStorageKey = "User"

  setUser(user: UserInterface) {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(user))
  }

  getUser(): UserInterface | null{
    const localStorageFields = window.localStorage[this.localStorageKey];
    return JSON.parse(localStorageFields);
  }

  deleteUser(){
    window.localStorage.removeItem(this.localStorageKey);
  }

  editUser(editedUser: UserInterface){
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(editedUser));
  }
}

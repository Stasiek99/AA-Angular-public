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
    const localStorageValue = window.localStorage[this.localStorageKey];
    return localStorageValue ? JSON.parse(localStorageValue) : null
  }

  deleteUser(){
    window.localStorage.removeItem(this.localStorageKey);
  }

  editUser(editedUser: UserInterface){
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(editedUser));
  }
}

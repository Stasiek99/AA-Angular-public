import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class UserLocalStorageService {
  constructor(private router: Router) {
  }
  private readonly localStorageKey = "User"

  setUser(user: UserInterface) {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(user))
  }

  getUser(): UserInterface | null{
    if (this.localStorageKey){
      const localStorageFields = window.localStorage[this.localStorageKey];
      return JSON.parse(localStorageFields);
    }
    else {
      return null;
    }
  }

  deleteUser(){
    window.localStorage.removeItem(this.localStorageKey);
    history.go(0);
  }

  editUser(editedUser: UserInterface){
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(editedUser));
    this.router.navigate(["/", "user"]);
  }
}

import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";

@Injectable({
  providedIn: "root"
})

export class UserLocalStorageService {
  private readonly userStorageItemKey = "List of Users"

  addUser(usersValues: UserInterface[]) {
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(usersValues))
  }

  getUsers(): UserInterface[] | null{
    const objectToParse = window.localStorage.getItem(this.userStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : null;
  }

  deleteLastAddedUser(newList: UserInterface[]){
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(newList));
  }

  editLastAddedUser(editedUser: UserInterface[]){
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(editedUser));
  }
}

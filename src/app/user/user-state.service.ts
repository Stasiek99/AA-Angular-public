import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";
import {UserLocalStorageService} from "./user-local-storage.service";

@Injectable({
  providedIn: "root"
})

export class UserStateService {
  constructor(private userLocalStorageService: UserLocalStorageService) {}
  createdUser: UserInterface | null = null;

  setUser(user: UserInterface){
   this.createdUser = user;
   this.userLocalStorageService.setUser(user)
  }

  getUser(): UserInterface | null{
    if(this.userLocalStorageService.getUser()){
      return this.userLocalStorageService.getUser();
    }
    else {
      return this.createdUser;
    }
  }

  deleteUser(){
    this.userLocalStorageService.deleteUser();
  }

  editUser(editedUser: UserInterface){
    this.createdUser = editedUser;
    this.userLocalStorageService.editUser(editedUser);
  }
}

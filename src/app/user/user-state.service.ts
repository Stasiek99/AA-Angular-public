import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";
import {UserLocalStorageService} from "./user-local-storage.service";

@Injectable({
  providedIn: "root"
})

export class UserStateService {
  constructor(private userLocalStorageService: UserLocalStorageService) {}
  private createdUser: UserInterface | null = this.userLocalStorageService.getUser()

  setUser(user: UserInterface){
   this.createdUser = user;
   this.userLocalStorageService.setUser(user)
  }

  getUser(): UserInterface | null{
      return this.createdUser;
  }

  deleteUser(){
    this.createdUser = null;
    this.userLocalStorageService.deleteUser();
  }

  editUser(editedUser: UserInterface){
    this.createdUser = editedUser;
    this.userLocalStorageService.editUser(editedUser);
  }
}

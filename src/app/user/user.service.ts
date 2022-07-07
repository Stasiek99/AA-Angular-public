import {Injectable} from "@angular/core";

import {UserInterface} from "../user-presentation/interfaces/user-interface";

@Injectable({
  providedIn: "root"
})
export class UserService {
  createdUser: UserInterface | null = null;

  setUser(user: UserInterface){
   this.createdUser = user;
  }

  getUser(): UserInterface | null{
    return this.createdUser;
  }
}

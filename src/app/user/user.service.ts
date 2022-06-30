import {Injectable} from "@angular/core";

import {CreateUserComponent} from "../create-new-user/components/create-user.component";
import {UserInterface} from "../user-presentation/interfaces/user-interface";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private createdUsers = [];

  constructor(private createdUserData: CreateUserComponent) {}

  setUser(user: UserInterface){
    user.name =  <string>this.createdUserData.onSubmit()?.name;
    user.login = <string>this.createdUserData.onSubmit().login;
    user.password = <string>this.createdUserData.onSubmit().password;
    user.country = <string>this.createdUserData.onSubmit().country;
    user.age = <number>this.createdUserData.onSubmit().age;
    this.getUserData(user);
  }

  getUserData(newUser: UserInterface){
    this.createdUsers.push(newUser);
  }
}

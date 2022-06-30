import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {UserInterface} from "../interfaces/user-interface";

@Injectable()
export class UserPresentationService{
  private readonly UserUrl = "assets/user.mock.json";

  constructor(private http: HttpClient) {}

  getUserData(){
    return this.http.get<UserInterface>(this.UserUrl);
  }
}

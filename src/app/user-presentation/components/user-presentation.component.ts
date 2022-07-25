import {Component, OnInit} from '@angular/core';

import {UserInterface} from "../interfaces/user-interface";
import {UserService} from "../../user/user.service";
import {UserLocalStorageService} from "../../user/user-local-storage.service";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: UserInterface | null = null;
  isButtonVisible = false;

  constructor(private userService: UserService, private userLocalStorageService: UserLocalStorageService) {}

  ngOnInit(){
    this.user = this.userLocalStorageService.getUser() as UserInterface;
    console.log(this.user)
    if(this.user){
      this.isButtonVisible = true;
    }
  }

  deleteUser(){
    window.localStorage.removeItem("User");
    window.location.reload();
  }
}

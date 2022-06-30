import {Component, OnInit} from '@angular/core';

import {UserInterface} from "../interfaces/user-interface";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: UserInterface | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.user = this.userService.getUser() as UserInterface;
    console.log(this.user)
  }
}

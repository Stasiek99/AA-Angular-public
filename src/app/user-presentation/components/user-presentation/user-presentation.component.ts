import {Component, OnInit} from '@angular/core';

import {UserInterface} from "../../interfaces/user-interface";
import {UserStateService} from "../../../user/user-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: UserInterface | null = null;
  isButtonVisible = false;

  constructor(private userService: UserStateService, private router: Router) {}

  ngOnInit(){
    this.user = this.userService.getUser() as UserInterface;
    if(this.user){
      this.isButtonVisible = true;
    }
  }

  deleteUser(){
    this.userService.deleteUser();
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["/", "user"]);
    });
  }

  redirectToEditUser(){
    this.router.navigate(["/", "edit-user"]);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';

import {UserInterface} from "../../user-presentation/interfaces/user-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss']
})
export class UserFormComponent {
  @Output() editUser = new EventEmitter<UserInterface>();
  constructor(private router: Router) {}

  onEditUser(editedUser: UserInterface){
    console.log(editedUser)
    this.editUser.emit(editedUser);
    this.redirectToUserPresentation();
  }

  redirectToUserPresentation(){
    this.router.navigate(["/", "user"]);
  }
}

import {Component} from '@angular/core';

import {UserInterface} from "../../user-presentation/interfaces/user-interface";
import {UserStateService} from "../../user/user-state.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: 'edit-user.component.html',
  styleUrls: ['edit-user.component.scss']
})
export class EditUserComponent {
  constructor(private userService: UserStateService) {}

  editUser(editedUser: UserInterface){
    this.userService.setUser(editedUser);
  }
}

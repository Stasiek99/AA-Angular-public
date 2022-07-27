import {Component, EventEmitter, Output} from '@angular/core';

import {UserInterface} from "../../user-presentation/interfaces/user-interface";

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss']
})
export class UserFormComponent {
  @Output() editUser = new EventEmitter<UserInterface>();

  onEditUser(editedUser: any){
    this.editUser.emit(editedUser);
  }
}

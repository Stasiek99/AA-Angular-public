import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent {
  @ViewChild("f") userDataForm!: NgForm;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const value = this.userDataForm.value;
    this.userService.setUser(value);
    this.redirectToUserPresentation()
    return this.userDataForm.value;
  }

  redirectToUserPresentation(){
    this.router.navigate(["/", "user"]);
  }
}

import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ErrorStateMatcher} from "@angular/material/core";

import {UserService} from "../../../user/user.service";

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
  }

  redirectToUserPresentation(){
    this.router.navigate(["/", "user"]);
  }
}
//TODO
// export class MyErrorStateMatcher implements ErrorStateMatcher{
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
// export class InputErrorStateMatcher{
//   inputFormControl = new FormControl("", [Validators.required]);
//
//   matcher = new MyErrorStateMatcher();
// }

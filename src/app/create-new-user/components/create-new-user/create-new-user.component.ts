import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

import {DialogCreateUserComponent} from "../dialog-create-user/dialog-create-user.component";
import {UserStateService} from "../../../user/user-state.service";

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent {
  @ViewChild("f") userDataForm!: NgForm;

  constructor(private dialog: MatDialog, private router: Router, private userService: UserStateService) {}

  openDialog(): void {
   let dialogRef = this.dialog.open(DialogCreateUserComponent, {
      height: "200px",
      width: "400px"
    });
   dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.userService.setUser(this.userDataForm.value);
         this.redirectToUserPresentation();
       }
   });
  }

  redirectToUserPresentation(){
    this.router.navigate(["/", "user"]);
  }
}

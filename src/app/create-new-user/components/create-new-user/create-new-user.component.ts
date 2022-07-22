import {Component, ViewChild, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

import {DialogCreateUserComponent} from "../dialog-create-user/dialog-create-user.component";
import {UserService} from "../../../user/user.service";

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent {
  @ViewChild("f") userDataForm!: NgForm;
  passedValues: any;

  constructor(private dialog: MatDialog, private router: Router, private userService: UserService) {}

  // ngOnInit(): void{
  //   let localStorageUserData = window.localStorage["User"];
  //
  //   if(localStorageUserData!==null){
  //     for(let key in localStorageUserData){
  //         this.userDataForm.querySelector()
  //       this.userDataForm.form.patchValue({
  //         userData: {
  //           name: {},
  //           login: {},
  //           country: {},
  //           age: {},
  //         }
  //       });
  //     }
  //   }
  // }

  openDialog(): void {
   let dialogRef = this.dialog.open(DialogCreateUserComponent, {
      data: this.userDataForm,
      height: "200px",
      width: "400px"
    });
   dialogRef.afterClosed().subscribe(result => {
       if(result){
           this.passedValues = result.value;
           this.userService.setUser(this.passedValues);
           this.redirectToUserPresentation();
       }
   });
  }

  redirectToUserPresentation(){
    this.router.navigate(["/", "user"]);
  }
}

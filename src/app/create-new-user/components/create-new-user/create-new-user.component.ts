import {Component, ViewChild, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

import {DialogCreateUserComponent} from "../dialog-create-user/dialog-create-user.component";
import {UserService} from "../../../user/user.service";
import {UserLocalStorageService} from "../../../user/user-local-storage.service";

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent {
  @ViewChild("f") userDataForm!: NgForm;
  @ViewChild("form") form: any
  passedValues: any;

  constructor(private dialog: MatDialog, private router: Router, private userService: UserService, private userLocalStorageService: UserLocalStorageService) {}

  // ngOnInit(): void{
  //   let localStorageUserData = window.localStorage["User"];
  //   localStorageUserData = JSON.parse(localStorageUserData);
  //
  //   if(localStorageUserData!==null){
  //     for(let key in localStorageUserData){
  //        this.form.querySelector("[name='"+ key + "']").value = localStorageUserData[key];
  //       this.userDataForm.form.patchValue({
  //         userData: {
  //           name: {localStorageUserData},
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
           this.userLocalStorageService.setUser(this.passedValues);
           this.redirectToUserPresentation();
       }
   });
  }

  redirectToUserPresentation(){
    this.router.navigate(["/", "user"]);
  }
}

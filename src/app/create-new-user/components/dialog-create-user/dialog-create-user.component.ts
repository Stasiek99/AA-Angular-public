import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {UserInterface} from "../../../user-presentation/interfaces/user-interface";

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserInterface,
    private matDialogRef: MatDialogRef<DialogCreateUserComponent>) {}

  onCloseClick(): void{
    this.matDialogRef.close();
  }
}

import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";

import {CreateNewUserComponent} from "./components/create-new-user/create-new-user.component";
import {DialogCreateUserComponent} from './components/dialog-create-user/dialog-create-user.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [CreateNewUserComponent, DialogCreateUserComponent],
  imports: [
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [CreateNewUserComponent]
})
export class CreateNewUserModule{}

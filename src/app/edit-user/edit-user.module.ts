import {NgModule} from "@angular/core";

import {EditUserComponent} from "./components/edit-user.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {UserFormComponent} from "../shared/shared-form/user-form.component";

@NgModule({
  declarations: [EditUserComponent],
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [EditUserComponent, UserFormComponent]
})
export class EditUserModule{}

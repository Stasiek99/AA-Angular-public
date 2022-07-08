import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";

import {CreateNewUserComponent} from "./components/create-new-user.component";

@NgModule({
  declarations: [CreateNewUserComponent],
  imports: [
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [CreateNewUserComponent]
})
export class CreateNewUserModule{}

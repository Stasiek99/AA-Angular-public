import {NgModule} from "@angular/core";

import {UserFormComponent} from "./shared-form/user-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [UserFormComponent]
})
export class SharedModule{}

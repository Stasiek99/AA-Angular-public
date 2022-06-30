import {NgModule} from "@angular/core";

import {CreateUserComponent} from "./components/create-user.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [CreateUserComponent],
  imports: [FormsModule],
  exports: [CreateUserComponent]
})
export class CreateNewUserModule{}

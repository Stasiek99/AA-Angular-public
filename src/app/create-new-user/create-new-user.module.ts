import {NgModule} from "@angular/core";

import {CreateNewUserComponent} from "./components/create-new-user.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [CreateNewUserComponent],
  imports: [FormsModule],
  exports: [CreateNewUserComponent]
})
export class CreateNewUserModule{}

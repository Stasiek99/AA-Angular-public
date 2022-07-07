import {NgModule} from "@angular/core";

import {UserPresentationComponent} from "./components/user-presentation.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [UserPresentationComponent],
  imports: [CommonModule],
  exports: [UserPresentationComponent]
})
export class UserPresentationModule {}

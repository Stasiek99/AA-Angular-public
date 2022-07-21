import {NgModule} from "@angular/core";

import {UserPresentationComponent} from "./components/user-presentation.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [UserPresentationComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [UserPresentationComponent]
})
export class UserPresentationModule {}

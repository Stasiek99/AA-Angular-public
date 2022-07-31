import {NgModule} from "@angular/core";

import {UserPresentationComponent} from "./components/user-presentation.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [UserPresentationComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  exports: [UserPresentationComponent]
})
export class UserPresentationModule {}

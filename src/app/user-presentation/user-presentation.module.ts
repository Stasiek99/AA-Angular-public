import {NgModule} from "@angular/core";

import {UserPresentationComponent} from "./components/user-presentation.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [UserPresentationComponent],
  imports: [BrowserModule],
  exports: [UserPresentationComponent]
})
export class UserPresentationModule {}

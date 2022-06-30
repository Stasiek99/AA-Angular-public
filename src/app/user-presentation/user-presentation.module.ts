import {NgModule} from "@angular/core";

import {UserPresentationComponent} from "./components/user-presentation.component";

@NgModule({
  declarations: [UserPresentationComponent],
  exports: [UserPresentationComponent]
})
export class UserPresentationModule {}

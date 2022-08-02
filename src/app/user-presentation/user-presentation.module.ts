import {NgModule} from "@angular/core";

import {UserPresentationComponent} from "./components/user-presentation/user-presentation.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UserPresentationComponent, UsersListComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  exports: [UserPresentationComponent]
})
export class UserPresentationModule {}

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/components/home.component";
import {CountrySearchEngineComponent} from "./country-search-engine/components/country-search-engine/country-search-engine.component";
import {PageNotFoundComponent} from "./general/components/page-not-found/page-not-found.component";
import {UserPresentationComponent} from "./user-presentation/components/user-presentation/user-presentation.component";
import {CreateNewUserComponent} from "./create-new-user/components/create-new-user/create-new-user.component";
import {EditUserComponent} from "./edit-user/components/edit-user.component";
import {UsersListComponent} from "./user-presentation/components/users-list/users-list.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "search-bar", component: CountrySearchEngineComponent},
  {path: "create-new-user", component: CreateNewUserComponent},
  {path: "user", component: UserPresentationComponent},
  {path: "edit-user", component: EditUserComponent},
  {path: "users-list", component: UsersListComponent},
  {path: "**", pathMatch: "full", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

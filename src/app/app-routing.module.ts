import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/components/home.component";
import {CountrySearchEngineComponent} from "./country-search-engine/country-search-engine/country-search-engine.component";
import {PageNotFoundComponent} from "./general/components/page-not-found/page-not-found.component";
import {CreateUserComponent} from "./create-user/components/create-user/create-user.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "search-bar", component: CountrySearchEngineComponent},
  {path: "create-new-user", component: CreateUserComponent},
  {path: "**", pathMatch: "full", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

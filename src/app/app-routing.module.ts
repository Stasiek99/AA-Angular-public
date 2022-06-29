import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/components/home.component";
import {CountrySearchEngineComponent} from "./country-search-engine/country-search-engine/country-search-engine.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "search-bar", component: CountrySearchEngineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

import { NgModule} from "@angular/core";

import {HomeComponent} from "./components/home.component";
import {AppComponent} from "../app.component";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  bootstrap: [AppComponent]
})
export class HomeModule {}

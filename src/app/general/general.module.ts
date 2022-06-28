import {NgModule} from "@angular/core";

import {HeaderComponent} from "../country-search-engine/components/header/header.component";
import {FooterComponent} from "../country-search-engine/components/footer/footer.component";
import {AppComponent} from "../app.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class GeneralModule{}

import {NgModule} from "@angular/core";

import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {UserPresentationModule} from "../user-presentation/user-presentation.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [UserPresentationModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class GeneralModule{}

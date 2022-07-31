import {Component, EventEmitter, Output, ViewChild} from "@angular/core";

import {SidenavNavigationType} from "../../enums/sidenav-navigation-type";

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})

export class SidenavComponent {
  readonly SidenavNavigationType = SidenavNavigationType;
  @Output() sidenavRoute = new EventEmitter<SidenavNavigationType>();

  onSelectLink(routeNumber: SidenavNavigationType) {
    this.sidenavRoute.emit(routeNumber);
  }
}

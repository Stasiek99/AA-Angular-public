import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private router: Router) {
    }

    goToHome() {
        this.router.navigate(["/", "home"]);
    }

    goToSearchBar() {
        this.router.navigate(["/", "search-bar"]);
    }

    goToCreateUser() {
        this.router.navigate(["/", "create-new-user"]);
    }

    goToUserPresentation() {
        this.router.navigate(["/", "user"]);
    }

}

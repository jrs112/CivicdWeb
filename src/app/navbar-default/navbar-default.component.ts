import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../services/user-api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar-default',
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss']
})
export class NavbarDefaultComponent implements OnInit {

homePage = {
  active: false,
  url: "home"
};
eventsPage = {
  active: false,
  url: "allevents"
}
getCivicdPage = {
  active: false,
  url: "getcivicd"
}

  constructor(private userApiService: UserApiService, private router: Router) { }


  ngOnInit() {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const urlArr = currentUrl.split("/");
    if(urlArr[urlArr.length - 1] === this.homePage.url) {
      console.log("GOT HERE")
      this.homePage.active = true;
    } else if(urlArr[urlArr.length - 1] === this.eventsPage.url) {
      this.eventsPage.active = true;
    } else if (urlArr[urlArr.length - 1] === this.getCivicdPage.url) {
      this.getCivicdPage.active = true;
    }

  }

  logOut() {
    this.userApiService.logOutUser()
    .subscribe(
      (data) => {
        console.log("LOGGED OUT", data);
        this.router.navigate(["/signin"])
        localStorage.clear();
      },
      (err) => console.log("there was an error logging out", err)
      
    )
  }

}

import { Component } from '@angular/core';
import { UserApiService } from "../services/user-api.service";
import { TokenManagerService } from "../services/token-manager.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent {

  loginErrMsg = "";

  constructor(
              private userApiService: UserApiService,
              private tokenManagerService: TokenManagerService,
              private router: Router) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }



  logUserIn(form) {
    console.log("running login function");
    console.log("FORM INFO", form);
    this.userApiService.logInUser(form.value.Email, form.value.Password)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.tokenManagerService.createToken(data);
        this.router.navigate(["/home"]);
        //***** THIS IS AUTH CODE TO PUT IN WHEN THE USER CONTROLLER IS SET UP IN THE API
      //   this.userApiService.getUserInfo(data.userName)
      //   .subscribe(
      //     (userInfo: any) => {
      //       this.userApiService.setUserInfo(data);
      //     },
      //     (error) => {
      //       console.log("something went wrong: ", error)
      //     }
      //   )
        // this.navCtrl.push(HomePage);
      // },
      // (err) => {
      //   console.log("got an error: ", err);
      //   this.loginErrMsg = err.error.error_description;
      //
      // }
    },
    (err) => {
      console.log("err", err)
      this.loginErrMsg = err.error.error_description;
    }
    )
  }

}

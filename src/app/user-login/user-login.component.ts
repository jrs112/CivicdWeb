import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginErrMsg = "";


  constructor() { }

  ngOnInit() {
  }

  logUserIn() {
  // this.userApiService.logInUser()
  // .subscribe(
  //   (data: any) => {
  //     console.log(data);
  //     this.tokenManagerService.createToken(data);
  //     this.navCtrl.push(HomePage);
  //     //***** THIS IS AUTH CODE TO PUT IN WHEN THE USER CONTROLLER IS SET UP IN THE API
  //   //   this.userApiService.getUserInfo(data.userName)
  //   //   .subscribe(
  //   //     (userInfo: any) => {
  //   //       this.userApiService.setUserInfo(data);
  //   //     },
  //   //     (error) => {
  //   //       console.log("something went wrong: ", error)
  //   //     }
  //   //   )
  //     // this.navCtrl.push(HomePage);
  //   // },
  //   // (err) => {
  //   //   console.log("got an error: ", err);
  //   //   this.loginErrMsg = err.error.error_description;
  //   //
  //   // }
  // }
  // )
}

}

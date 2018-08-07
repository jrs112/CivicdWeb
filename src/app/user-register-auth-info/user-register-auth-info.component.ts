import { Component, OnInit } from '@angular/core';
import { TagsApiService } from "../services/tags-api.service";
import { UserApiService } from "../services/user-api.service";
import { TokenManagerService } from "../services/token-manager.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-register-auth-info',
  templateUrl: './user-register-auth-info.component.html',
  styleUrls: ['./user-register-auth-info.component.scss']
})
export class UserRegisterAuthInfoComponent implements OnInit {

  constructor(private tagsApiService: TagsApiService,
              private userApiService: UserApiService,
              private tokenManagerService: TokenManagerService,
              private router: Router) { }

  ngOnInit() {
    this.tagsApiService.selectedTagArr.subscribe(
      (tagArr: Array<object>) => {
        this.selectedTagArr = tagArr;
      }
    )
  }
  selectedTagArr = [];
  formValid = false;
  passMatch = false;

  portfolioPic = "assets/imgs/default_portfolio.png"
  imageLoad = false;



  checkPass(event, currentPass) {
    console.log("currentPass: ", currentPass);
    console.log("confirmPass ", event)
    if(event === currentPass) {
      console.log("GOT HERE");
      this.passMatch = true;
    } else {
      this.passMatch = false;
    }
  }

  submitUserInfo(form) {
    let value = form.value;
    value.Tags = this.selectedTagArr;
    this.userApiService.createUser(value)
    .subscribe(
      (userInfo) => {
        console.log("user created Successfully", userInfo);
        this.userApiService.logInUser(value.Email, value.Password)
        .subscribe(
          (info) => {
            console.log("SUCCES LOGGING IN USER", info);
            this.tokenManagerService.createToken(info);
            this.router.navigate(["home"])

          },
          (error) => {
            console.log("error logging in user", error);
            this.router.navigate(["signin"]);
          } 
        )
      },
      (err) => console.log("there was an error creating user", err)
    )
  }







}

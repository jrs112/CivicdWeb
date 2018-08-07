import { Component, OnInit } from '@angular/core';
import { UserApiService } from "../services/user-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userApiService: UserApiService) { }

  checkedInAmt = 0;
  portfolioPic = "../../assets/images/default_portfolio.png";
  userInfo;
  firstColArr = [];
  secondColArr = [];
  thirdColArr = [];

  ngOnInit() {
    console.log('ionViewDidLoad HomePage');
    this.userApiService.user$.subscribe(
      (data: any) => {
        console.log("User info form Obs", data);
        this.userInfo = data;
        this.firstColArr = [];
        this.secondColArr = [];
        this.thirdColArr = [];
        if (data) {
          console.log("GETTING HERE");
        for (let i = 0; i < this.userInfo.Tags.length; i = i + 3) {
          this.firstColArr.push(data.Tags[i]);
          if(this.userInfo.Tags[i + 1]) {
            this.secondColArr.push(this.userInfo.Tags[i + 1]);
          }
          if(this.userInfo.Tags[i + 2]) {
            this.thirdColArr.push(this.userInfo.Tags[i + 2]);
          }
        }
      }
      },
      (err) => {
        console.log("there was an error getting user info", err)
      }
    )
  }

}

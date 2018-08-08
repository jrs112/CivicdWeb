import { Component, OnInit } from '@angular/core';
import { TagsApiService } from "../services/tags-api.service";
import { UserApiService } from "../services/user-api.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin-create-org',
  templateUrl: './admin-create-org.component.html',
  styleUrls: ['./admin-create-org.component.scss']
})
export class AdminCreateOrgComponent implements OnInit {

  constructor(private tagsApiService: TagsApiService, private userApiService: UserApiService, private router: Router) { }
  tagsArr = [];
  succMsg = "";
  errMsg = "";
  submitBtnInfo = "Submit"

  ngOnInit() {
    this.tagsApiService.selectedTagArr.subscribe(
      (data: Array<object>) => {
        this.tagsArr = data;
      }
    )
  }

  createOrg(form) {
    this.errMsg = "";
    this.succMsg = "";
    this.submitBtnInfo = "Please wait..."
    let value = form.value;
    value.Tags = this.tagsArr;
    this.userApiService.createOrg(value)
    .subscribe(
      (data: any) => {
        console.log("org created successfully", data)
        form.reset();
        this.succMsg = data.DisplayName + " organization successfully created!"
        this.submitBtnInfo = "Submit";
      },
      (err) => {
        console.log("there was an error creating the org", err)
        this.errMsg = "There was an error creating the organization.  Please try again"
        this.submitBtnInfo = "Submit";
      }
    )

  }

  logUserOut() {
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

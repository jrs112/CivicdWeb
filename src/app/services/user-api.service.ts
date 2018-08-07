import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenManagerService } from "./token-manager.service";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";

@Injectable()

export class UserApiService {

constructor(private http: HttpClient, private tokenManagerService: TokenManagerService) {}

  userInfo: object;

  private userSubject = new BehaviorSubject(this.userInfo);

  user$: Observable<object> = this.userSubject.asObservable();


  createUser(info) {

    return this.http.post("http://millennialsvote.azurewebsites.net/api/users", info, {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  createOrg(info) {
    let token = this.tokenManagerService.retrieveToken();
    let bearToken = "bearer " + token;
    return this.http.post("http://millennialsvote.azurewebsites.net/api/users", info, {headers: new HttpHeaders({'Authorization': "Bearer " + token})});
  }


  logInUser(userName, passDigest) {

    let otherInfo = "grant_type=password&username="+ userName + "&password=" + passDigest;
    return this.http.post("http://millennialsvote.azurewebsites.net/token", otherInfo, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }


  // getUserInfo(email) {
  //   let token = this.tokenManagerService.retrieveToken();
  //   console.log("service token: ", token);
  //   return this.http.get(`http://millennialsvote.azurewebsites.net/api/users/${email}`, {headers: new HttpHeaders().set('Authorization', `bearer${token}`)});
  // }

  getUserInfo() {
    let userEmail = this.tokenManagerService.getUserFromToken()
    let token = this.tokenManagerService.retrieveToken();
    let bearToken = "bearer " + token;

    return this.http.get("http://millennialsvote.azurewebsites.net/api/users/" + userEmail + "/", {headers: new HttpHeaders({'Authorization': "Bearer " + token})});

  }

  setUserInfo(info) {
    this.userSubject.next(info)
  }

  returnUserInfo() {
    return this.userInfo;
  }




}

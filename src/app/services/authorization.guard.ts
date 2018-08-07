import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserApiService } from "./user-api.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AuthorizationGuard implements CanActivate {



  loggedIn = false;

  constructor(private userApiService: UserApiService, private router: Router, private http: HttpClient) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



    return this.isAuth().then(
      (auth: boolean) => {
        if(auth) {
          return true;
        } else {
          this.router.navigate(["/"]);
        }
      }
    )
  }

  isAuth() {
    const promise = new Promise(
      (resolve, reject) => {
        this.userApiService.getUserInfo()
        .subscribe(
          info => {
            this.userApiService.setUserInfo(info);
            resolve(true);
          },
          err => {
            console.log("guard err", err)
            resolve(false);
          }

        )
      }
    )
    return promise;
  }
}

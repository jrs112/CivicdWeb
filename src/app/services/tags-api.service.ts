import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenManagerService } from "./token-manager.service";
import { Subject } from "rxjs";

@Injectable()

export class TagsApiService {

constructor(private http: HttpClient, private tokenManagerService: TokenManagerService) {}

selectedTagArr = new Subject();

getTags() {
let token = this.tokenManagerService.retrieveToken();
let bearToken = "bearer " + token;

return this.http.get("http://millennialsvote.azurewebsites.net/api/activities/tags", {headers: new HttpHeaders({'Authorization': "Bearer " + token})});
}


}

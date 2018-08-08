import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterAuthInfoComponent } from './user-register-auth-info/user-register-auth-info.component';
import { UserRegisterTypeComponent } from './user-register-type/user-register-type.component';
import { UserRegisterInterestsComponent } from './user-register-interests/user-register-interests.component';
import { FormsModule } from '@angular/forms';
import { UserApiService } from "./services/user-api.service";
import { TokenManagerService } from "./services/token-manager.service";
import { AuthorizationGuard } from "./services/authorization.guard";
import { TagsApiService } from "./services/tags-api.service";
import { HomeComponent } from './home/home.component';
import { NavbarDefaultComponent } from './navbar-default/navbar-default.component';
import { EventsAllComponent } from './events-all/events-all.component';
import { GetCivicdComponent } from './get-civicd/get-civicd.component';
import { AdminCreateOrgComponent } from './admin-create-org/admin-create-org.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterAuthInfoComponent,
    UserRegisterTypeComponent,
    UserRegisterInterestsComponent,
    HomeComponent,
    NavbarDefaultComponent,
    EventsAllComponent,
    GetCivicdComponent,
    AdminCreateOrgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserApiService, TokenManagerService, TagsApiService, AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

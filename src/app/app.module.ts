import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterAuthInfoComponent } from './user-register-auth-info/user-register-auth-info.component';
import { UserRegisterTypeComponent } from './user-register-type/user-register-type.component';
import { FormsModule } from '@angular/forms';
import { UserApiService } from "./services/user-api.service";
import { TokenManagerService } from "./services/token-manager.service";

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterAuthInfoComponent,
    UserRegisterTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserApiService, TokenManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

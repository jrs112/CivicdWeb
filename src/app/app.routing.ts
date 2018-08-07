import { Routes } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterTypeComponent } from "./user-register-type/user-register-type.component";
import { UserRegisterAuthInfoComponent } from "./user-register-auth-info/user-register-auth-info.component";
import { HomeComponent } from "./home/home.component";
import { AuthorizationGuard } from "./services/authorization.guard";




export const routes: Routes = [

  {
  path: 'signin',
  component: UserLoginComponent
  },
  {
    path: "chooseregistration",
    component: UserRegisterTypeComponent
  },
  {
    path: "home",
    canActivate: [AuthorizationGuard],
    component: HomeComponent
  },
  {
    path: "registrationfirststep",
    component: UserRegisterAuthInfoComponent
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },

]

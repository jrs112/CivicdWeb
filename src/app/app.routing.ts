import { Routes } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterTypeComponent } from "./user-register-type/user-register-type.component";
import { UserRegisterAuthInfoComponent } from "./user-register-auth-info/user-register-auth-info.component";
import { EventsAllComponent } from "./events-all/events-all.component";
import { HomeComponent } from "./home/home.component";
import { AdminCreateOrgComponent } from "./admin-create-org/admin-create-org.component";
import { GetCivicdComponent } from "./get-civicd/get-civicd.component";
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
    path: "adminregisterorg",
    component: AdminCreateOrgComponent
  },
  {
    path: "home",
    canActivate: [AuthorizationGuard],
    component: HomeComponent
  },
  {
    path: "allevents",
    canActivate: [AuthorizationGuard],
    component: EventsAllComponent
  },
  {
    path: "getcivicd",
    canActivate: [AuthorizationGuard],
    component: GetCivicdComponent
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

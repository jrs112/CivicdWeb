import { Routes } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterTypeComponent } from "./user-register-type/user-register-type.component";
import { UserRegisterAuthInfoComponent } from "./user-register-auth-info/user-register-auth-info.component";




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
    path: "registrationfirststep",
    component: UserRegisterAuthInfoComponent
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },

]

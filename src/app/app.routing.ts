import { Routes } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";




export const routes: Routes = [

  {
  path: 'signin',
  component: UserLoginComponent
  },
{
  path: '',
  redirectTo: 'signin',
  pathMatch: 'full'
},

]

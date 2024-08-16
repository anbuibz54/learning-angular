import { Routes } from '@angular/router';
import { Auth } from './LoginForm/app.component.auth';
import { LoginForm } from './LoginForm/Login/auth.component.login';
import { SignUpForm } from './LoginForm/SignUp/auth.component.sign-up';
export const routes: Routes = [
    {path:'auth',component:Auth,children:[{path:'login',component:LoginForm},{path:'sign-up',component:SignUpForm}]}
];

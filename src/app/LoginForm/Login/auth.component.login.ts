import { Component,Input,inject } from "@angular/core";
import {MatInputModule,MatFormField} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from "@angular/forms";
import { FormValidate } from "../Services/auth.services";
@Component({
    selector:'login-form',
    imports:[MatInputModule,MatFormField,FormsModule,MatButtonModule],
    providers:[FormValidate],
    template:`<div>
<p>Login Form</p>
<mat-form-field>
    <mat-label>User name</mat-label>
    <input matInput type="text" [(ngModel)]="username" /> 
</mat-form-field>
<button mat-button (click)="validate()">Login</button>
    </div>`,
    standalone:true
})
export class LoginForm{
    constructor(private service:FormValidate){}
    username ='username';
    validate(){
        console.log(this.service.validate(this.username))
    }
}
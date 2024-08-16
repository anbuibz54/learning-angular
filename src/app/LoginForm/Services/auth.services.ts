import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',

})
export class FormValidate{
    validate(username:string){
        return !username;
    }
}
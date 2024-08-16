import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root',

})
export class FormValidate{
    constructor(private http:HttpClient){}
    validate(username:string){
        return !username;
    }
    fetchApi():Observable<any>{
        return this.http.get('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } });
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import {User} from '../../../shared/interface'
import { Observable } from "rxjs";
import { UserData } from "../auth.model";
// import { UserData } from "../auth.model";

@Injectable()

export class AuthService {
    readonly baseURL = 'https://localhost:44315/api/User';
    //readonly baseURL = 'https://localhost:44315/api/PaymentDetail';

    formData: UserData = new UserData();

    postSomeUser() {
        console.log('post method work');
        return this.http.post(this.baseURL, this.formData);
    }

    

    constructor(private http: HttpClient){}

    get token(): string {
        return ''
    }

    login(user: User): Observable<any>{
        return this.http.post(this.baseURL, user);
    }

    logout(){

    }

    isAuthentificated(): boolean {
        return !!this.token
    }

    private setToken() {

    }
}
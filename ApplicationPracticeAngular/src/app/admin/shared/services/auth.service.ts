import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import {User} from '../../../shared/interface'
import { ThrowStmt } from "@angular/compiler";
import { Observable } from "rxjs";
import { UserData } from "../auth.model";

@Injectable()

export class AuthService {
    readonly baseURL = "http://localhost:44315/api/User";

    formSomeData: UserData = new UserData();

    postSomeUser() {
        console.log('post method work');
        return this.http.post(this.baseURL, this.formSomeData);
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
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import {User} from '../../../shared/interface'
import { Observable } from "rxjs";
import { UserData } from "../auth.model";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
// import { UserData } from "../auth.model";

@Injectable()

export class AuthService {
    readonly baseURL = 'https://localhost:44315/api/User';

    formData: UserData = new UserData();

    postSomeUser() {
        console.log('post method work');
        return this.http.post(this.baseURL, this.formData);
    }    

    constructor(private http: HttpClient,
        private router: Router,){}

    get token(): string {
        return '';
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

    loginUser(form: NgForm){
        this.http.post(this.baseURL, this.formData)
        .subscribe(response => {
            const token = (<any>response).token;
            localStorage.setItem("jwt", token);
            this.router.navigate(["/"]);
        }, err => {
            console.log('error in auth.service');
        })
    }
}
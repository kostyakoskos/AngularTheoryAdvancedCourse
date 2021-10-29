import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { User } from '../../../shared/interface'
import { Observable } from "rxjs";
import { UserData } from "../auth.model";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { environment } from "src/environments/environment";
// import { UserData } from "../auth.model";

@Injectable()

export class AuthService {
    readonly baseURL = 'https://localhost:44315/api/User';

    formData: UserData = new UserData();

    postSomeUser() {
        console.log('post method work');
        localStorage.setItem('Token', '2 parametr token');
        return this.http.post(this.baseURL, this.formData);
    }

    constructor(private http: HttpClient,
        private router: Router,) { }

    get token(): string{
        const expDate = new Date(localStorage.getItem('fb-token-exp') as string);
        if (new Date() > expDate) {
            this.logout();
            return '';
        }
        return localStorage.getItem('fb-token') as string;
    }

    toStringMyFunc(temp: any): string {
        if (temp == null) {
            return "";
        }
        return temp.toString();
    }

    login(user: User): Observable<any> {
        console.log('in method login');
        user.returnSecureToken = true;
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${environment.apiKey}`, user);
    }

    logout() {
        this.setToken(null)
    }

    isAuthentificated(): boolean {
        console.log('isAuthentificated token: ', this.token)
        return !!this.token
    }

    // loginUser(form: NgForm) {
    //     const dataFromForm = {
    //         'Email': form.value.email,
    //         'Password': form.value.password,
    //     }

    //     this.http.post(this.baseURL, this.formData)
    //         .subscribe(response => {
    //             const token = (<any>response).token;
    //             localStorage.setItem("jwt", token);
    //             this.router.navigate(["/"]);
    //         }, err => {
    //             console.log('error in auth.service');
    //         })
    // }

    private setToken(response: string | null) {
        if(response !== null){
            localStorage.setItem('fb-token', response);
            localStorage.setItem('fb-token-exp', response);
        } else {
            localStorage.clear()
        }
    }
}
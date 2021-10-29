import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserData } from 'src/app/admin/shared/auth.model';
import { AuthService } from 'src/app/admin/shared/services/auth.service';

@Component({
  selector: 'app-login-page-for-all-users',
  templateUrl: './login-page-for-all-users.component.html',
  styleUrls: ['./login-page-for-all-users.component.scss']
})
export class LoginPageForAllUsersComponent implements OnInit {

  // private toastr: ToastrServsice,
  constructor(public service: AuthService,
    private http: HttpClient
     ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postSomeUser().subscribe(
      res => {
        console.log('add');
        this.resetForm(form);
       
      },
      err => {
        console.log('error', err);
      }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new UserData();
  }

//   loginUser(form: NgForm) {

//     const dataFromForm = {
//         'Email': form.value.email,
//         'Password': form.value.password,
//     }

//     this.http.post(this.baseURL, this.formD)
//         .subscribe(response => {
//             const token = (<any>response).token;
//             localStorage.setItem("jwt", token);
//             this.router.navigate(["/"]);
//         }, err => {
//             console.log('error in auth.service');
//         })
// }
}

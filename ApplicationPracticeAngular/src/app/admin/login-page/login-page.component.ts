import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface';
import { UserData } from '../shared/auth.model';
import { AuthService } from '../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // formTwo: FormGroup = new FormGroup({
  //   'email': new FormControl("",),
  //   'password': new FormControl("",),
  // });
  // readonly tokenURL = 'https://localhost:44315/api/auth/login';
  readonly tokenURL = 'https://localhost:44315/api/user';

  formD: UserData = new UserData();

  constructor(public service: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient) { }

  // ngOnInit() {
  //   this.form = new FormGroup({
  //     email: new FormControl(null, 
  //       [
  //         Validators.email, 
  //         Validators.required
  //       ]
  //       ),
  //     password: new FormControl(null, 
  //       [
  //         Validators.required,
  //         Validators.minLength(6),
  //       ]),
  //   })
  // }

  ngOnInit(): void {
    // this.formTwo = new FormGroup({
    //   email: new FormControl(null,
    //     [
    //       Validators.email,
    //       Validators.required
    //     ]
    //   ),
    //   password: new FormControl(null,
    //     [
    //       Validators.required,
    //       Validators.minLength(6),
    //     ]),
    // })
  }

  // submit(){
  //   if(this.form.invalid)
  //   {
  //     return;
  //   }

  //   const user: User = {
  //     email: this.form.value.email,
  //     password: this.form.value.password
  //   }

  //   this.auth.login(user).subscribe( () => {
  //     this.form.reset()
  //     this.router.navigate(['/admin', 'dashboard'])
  //   })
  // }

  onSubmit(form: NgForm) {
    this.service.postSomeUser().subscribe(
      res => {
        console.log('add');
        this.resetForm(form);
        this.toastr.success('Sumbit success', 'Payment Detail Register')
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

  // loginUser(form: NgForm) {
  //   const dataFromForm = {
  //     'Email': form.value.email,
  //     'Password': form.value.password,
  //   }

  //   this.http.post(this.tokenURL, this.formD)
  //     .subscribe(response => {
  //       const token = (<any>response).token;
  //       localStorage.setItem("jwt", token);
  //       this.router.navigate(["/"]);
  //     }, err => {
  //       console.log('error in auth.service');
  //     })
  // }

  twoMethod(form: NgForm){
    // const dataFromForm = {
    //   'Email': form.value.email,
    //   'Password': form.value.password,
    // }

    this.http.post(this.tokenURL, this.formD)
      .subscribe(response => {
        console.log('in 2 method');
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        console.log('token', response);
      }, err => {
        console.log('error in auth.service');
        console.log('err', err)
      })

      // this.service.postSomeUser().subscribe(
      //   res => {
      //     console.log('add');
      //     this.resetForm(form);
      //     this.toastr.success('Sumbit success', 'Payment Detail Register')
      //   },
      //   err => {
      //     console.log('error', err);
      //   }
      // )
  }
}

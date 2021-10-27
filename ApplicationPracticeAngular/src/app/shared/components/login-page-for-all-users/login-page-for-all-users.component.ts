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

  constructor(public service: AuthService,
    private toastr: ToastrServsice, ) { }

  ngOnInit(): void {
  }

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
}

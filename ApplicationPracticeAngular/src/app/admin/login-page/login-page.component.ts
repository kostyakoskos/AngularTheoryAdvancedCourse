import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup =  new FormGroup({
    email: new FormControl(null,),
    password: new FormControl(null,),
  });

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, 
        [
          Validators.email, 
          // Validators.required
        ]
        ),
      password: new FormControl(null, 
        [
          // Validators.required,
          Validators.minLength(6),
        ]),
    })
  }

  submit(){
    if(this.form.invalid)
    {
      return;
    }
  }
}

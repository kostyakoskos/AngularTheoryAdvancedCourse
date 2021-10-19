import { Component, Injectable, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(null)
  });

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submited', this.form);
      const formData = { ...this.form.value }
      console.log('formData: ', formData);
    }
  }
}
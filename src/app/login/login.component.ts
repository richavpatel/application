import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  heroForm;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {}

createForm() {
  this.heroForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
    password2: '',
    state: '',
    zip: '',
    city: '',
    checkbox: ''
  });
}
}

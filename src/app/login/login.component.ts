import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule ,FormsModule ,NgControl, NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  login= new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
  });
  constructor(private router: Router) { 
  }
  onSubmit()
  {
    this.router.navigate(['/dash']);
  }
  OnSigin()
  {
    this.router.navigate(['/sign']);
  }
}

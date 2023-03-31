import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule ,FormsModule ,NgControl, NgForm, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  hide = true;
  login= new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirm: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
  });
constructor(private router: Router) { 
}
onSubmit()
{
  this.router.navigate(['/dash']);
}


OnLogin()
{
  this.router.navigate(['/login']);
}
}


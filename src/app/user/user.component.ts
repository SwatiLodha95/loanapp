import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
 title= 'Angular Reactive Form';

  contactForm = new FormGroup({
    'applicantname': new FormControl(null, Validators.required),
    'pannumber': new FormControl(null, Validators.required),
    'email': new FormControl('', [Validators.required,Validators.email]),
    'loan': new FormControl('', [Validators.required, Validators.minLength(5)])


  })


  onSubmit() {
    console.log(this.contactForm.value);
    alert("Login Succesfull")
    this.contactForm.reset();
  } get name() {
    return this.contactForm.get('applicantname');
  }
  get email() {
    return this.contactForm.get('pannumber');
  }
  get phone() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('loan');
  }
}

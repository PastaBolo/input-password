import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = 'classic p455w0rd';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      password: new FormControl('form p455w0rd', this.passwordPatternValidator),
      stars: new FormControl(2)
    });
  }

  passwordPatternValidator = (control: FormControl): ValidationErrors => {
    return null;
  }
}

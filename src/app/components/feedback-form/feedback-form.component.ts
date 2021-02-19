import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  formGroup: FormGroup
  ngOnInit(): void {
  }
  constructor() {
    this.formGroup = new FormGroup({
      titleField:new FormControl('', [Validators.required,Validators.minLength(10), 
      Validators.maxLength(50)]),
      emailField: new FormControl('', [Validators.required, Validators.email]),
      feedbackField: new FormControl('', [
        Validators.required, 
        Validators.minLength(25), 
        Validators.maxLength(3000)
      ])
    })
  }

  getErrorMessage(control: AbstractControl): string {
    if (!control || control.valid) {
      return '';
    }
    // required
    if (control.hasError('required')) {
      return "Cannot be empty";
    }
    if (control.hasError('email')) {
      return "Must be a valid email";
    }
    if (control.hasError('minlength')) {
      const limit = control.getError('minlength').requiredLength;
      return `Must be at least ${limit} characters`;
    }
    if (control.hasError('minlength')) {
      const limit = control.getError('maxlength').requiredLength;
      return `Must be no more than ${limit} characters`;
    }

    // Default error message
    return "Invalid input";
  }

  onSubmit() {
    this.formGroup.reset()
  }
  get titleField(): AbstractControl {
    return this.formGroup.get('titleField');
  }

  get emailField(): AbstractControl {
    return this.formGroup.get('emailField');
  }

  get feedbackField(): AbstractControl {
    return this.formGroup.get('feedbackField');
  }
}  
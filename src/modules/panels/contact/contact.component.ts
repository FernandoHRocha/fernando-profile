import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/services/email.service';

@Component({
  selector: 'contact-app',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  groupForm = new FormGroup({
    email     : new FormControl('', [Validators.required]),
    name      : new FormControl('', [Validators.required]),
    _subject  : new FormControl('', [Validators.required]),
    message   : new FormControl('', [Validators.required])
  });

  constructor(private emailService: EmailService) {
  }

  constructEmailObject(): object {
    return {
      email : this.groupForm.controls['email'].value,
      name : this.groupForm.controls['name'].value,
      _subject : this.groupForm.controls['_subject'].value,
      message : this.groupForm.controls['message'].value,
    };
  }

  onSubmit() {
    const emailObject = this.constructEmailObject();
    this.emailService.sendEmail( emailObject );
  }
}
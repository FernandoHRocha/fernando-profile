import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/services/email.service';
import { BaseComponent } from 'src/modules/base.component';

@Component({
  selector: 'contact-app',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  groupForm = new UntypedFormGroup({
    email     : new UntypedFormControl('', [Validators.required]),
    name      : new UntypedFormControl('', [Validators.required]),
    _subject  : new UntypedFormControl('', [Validators.required]),
    message   : new UntypedFormControl('', [Validators.required])
  });
  CONTACT_EMAIL = BaseComponent.CONTACT_EMAIL;
  CONTACT_PHONE = BaseComponent.CONTACT_PHONE;

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
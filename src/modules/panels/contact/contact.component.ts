import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-app',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  groupForm = new FormGroup({
    email     : new FormControl('', [Validators.required]),
    nome      : new FormControl('', [Validators.required]),
    assunto   : new FormControl('', [Validators.required]),
    mensagem  : new FormControl('', [Validators.required])
  });
}

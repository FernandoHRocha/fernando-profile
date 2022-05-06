import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'email-app',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  groupForm = new FormGroup({
    email     : new FormControl('', [Validators.required]),
    nome      : new FormControl('', [Validators.required]),
    assunto   : new FormControl('', [Validators.required]),
    mensagem  : new FormControl('', [Validators.required])
  });
}

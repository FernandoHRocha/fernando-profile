import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { BaseComponent } from 'src/modules/base.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

  constructor( private http: HttpClient, private notificationService: NotificationService) { }

  public sendEmail(emailObject: any) {
    if(!emailObject.email)
        return this.notificationService.sendFailure('O campo e-mail encontra-se vazio.');
    if(!emailObject.name)
        return this.notificationService.sendFailure('O campo nome encontra-se vazio.');
    if(!emailObject._subject)
        return this.notificationService.sendFailure('O campo assunto encontra-se vazio.');
    if(!emailObject.message)
        return this.notificationService.sendFailure('O campo mensagem encontra-se vazio.');

        this.sendFormspreeEmail(emailObject).subscribe(
            (data) => {
                this.notificationService.sendSucessfull('Email enviado com sucesso.');
            },
            (error) => {
                this.notificationService.sendFailure('Infelizmente não foi possível entregar o seu e-mail.');
            }
        );

    }
    
    public sendFormspreeEmail(emailObject: any) {
      return this.http.post( BaseComponent.EMAIL_URL, emailObject);
    }
}
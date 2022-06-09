import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public sendSucessfull(message: string) {
    const notificationMsg = document.querySelector("#notification_message");
    const notificationDiv = document.querySelector('#notification');
    if(notificationMsg && notificationDiv){
      notificationDiv.classList.add('active');
      notificationMsg.textContent = message;
      notificationMsg.addEventListener('animationend', () => {
        notificationDiv.classList.remove('active');
        notificationMsg.textContent = '';
      });
    }
  }

  public sendFailure(message: string) {
    this.sendSucessfull(message);
  }
}
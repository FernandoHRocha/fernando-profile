import { Component } from '@angular/core';
import { BaseComponent } from 'src/modules/base.component';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'panels-intro-app',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent extends BaseComponent {
  faCoffee = faChevronCircleDown;
}

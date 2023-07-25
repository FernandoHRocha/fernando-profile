import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {

  FIRST_NAME = BaseComponent.FIRST_NAME;
  LAST_NAME = BaseComponent.LAST_NAME;
  CONTACT_EMAIL = BaseComponent.CONTACT_EMAIL;
  CONTACT_PHONE = BaseComponent.CONTACT_PHONE;
  PERSONAL_SITE = BaseComponent.PERSONAL_SITE;
  COMPLETE_ABOUT = BaseComponent.COMPLETE_ABOUT;
  EDUCATION = BaseComponent.EDUCATION;
  CARRER = BaseComponent.CARRER;
  PROFESSIONAL_EXPERIENCE = BaseComponent.PROFESSIONAL_EXPERIENCE;
  SKILLS = BaseComponent.SKILLS;

}

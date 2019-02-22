import { Component, OnInit, Input } from '@angular/core';
import { myExperiences } from './experiences';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences = myExperiences;
  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}

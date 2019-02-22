import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss']
})
export class CardExperienceComponent implements OnInit {

  @Input() link: string;
  @Input() title: string;
  @Input() post: string;
  @Input() logo: string;
  @Input() descriptions: string;
  @Input() frontend: string;
  @Input() backend: string;
  @Input() bdd: string;
  @Input() other: string;
  @Input() style: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {


  page: BehaviorSubject<string> = new BehaviorSubject<string>("Portfolio");

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  langs = [
    {
      'name': 'Francais',
      'value': 'fr'
    }
    ,
    {
      'name': 'English',
      'value': 'en'
    }
  ]

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService, private router: Router) { }

  getPage(value: any) {
    this.page.next(value);
    // this.router.navigate(['/' + this.page]);
  }
}

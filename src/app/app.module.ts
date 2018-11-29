import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes: Routes = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Accueil'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'A Propos'
    }
  },
  {
    path: 'skills',
    component: AboutComponent,
    data: {
      title: 'Mes Compétences'
    }
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
    data: {
      title: 'Experiences'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact'
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent,
    ContentComponent,
    AboutComponent,
    SkillsComponent,
    ExperiencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

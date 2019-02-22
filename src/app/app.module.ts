import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyNavComponent } from './my-nav/my-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { CardExperienceComponent } from './card-experience/card-experience.component';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    component: SkillsComponent,
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
    MyNavComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperiencesComponent,
    ContactComponent,
    CardExperienceComponent],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
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

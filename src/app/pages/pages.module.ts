import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { APP_ROUTES } from '../app.routes';
import { AppComponent } from '../app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { PersonFormComponent } from '../pages/person-form/person-form.component';
import { PersonListComponent } from '../pages/person-list/person-list.component';

import {PersonService} from '../services/person.service';
import { PagPrincipalComponent } from '../pages/pag-principal/pag-principal.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { PagesComponent } from '../pages/pages.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PAGE_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonFormComponent,
    PersonListComponent,
    PagPrincipalComponent,
    SignInComponent,
    PagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTES,
    RouterModule,
    PAGE_ROUTES
  ],
  providers: [
    PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

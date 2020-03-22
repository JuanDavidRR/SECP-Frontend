import { Routes, RouterModule } from "@angular/router";

import { PersonListComponent } from "../pages/person-list/person-list.component";
import { PagPrincipalComponent } from "../pages/pag-principal/pag-principal.component";
import { SignInComponent } from "../components/sign-in/sign-in.component";
import { PersonFormComponent } from '../pages/person-form/person-form.component';
import { PagesComponent } from '../pages/pages.component';
import { AboutComponent } from '../pages/about/about.component';
import { ProductListComponent } from '../pages/product-list/product-list.component';
import { ProductFormComponent } from '../pages/product-form/product-form.component';

const PAGES_ROUTING: Routes = [

  {
    path: '', component: PagesComponent,
    children: [
      { path: 'agregar-empleado', component: PersonFormComponent },
      { path: 'empleados', component: PersonListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'home', component: PagPrincipalComponent },
      { path: 'productos', component: ProductListComponent },
      { path: 'agregar-producto', component: ProductFormComponent }
    ]
  },
  { path: 'login', component: SignInComponent },


];

export const PAGE_ROUTES = RouterModule.forRoot( PAGES_ROUTING, { useHash: true } );

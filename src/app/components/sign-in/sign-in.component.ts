import { Component, OnInit, HostBinding } from '@angular/core';
import { Person, personSignIn } from '../../models/person';
import { Router } from '@angular/router';

import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @HostBinding('class') classes ='row';

login: boolean = false;

  personSignIn: personSignIn = {
    username: '',
    password:''
  };
  constructor(private personService: PersonService,
              public router: Router ) {

   }

  ngOnInit(): void {
  }

  //METODO PARA INICIAR SESIÓN SI LA INFORMACIÓN ALMACENADA CONCUERDA A LA DATABASE
  iniciarSesion() {
    this.personService.confirmateSingIn(this.personSignIn).subscribe(
      res => {
        console.log(res)
        this.enter()
        this.login = true

      },
      err => console.log(err)
    )
  }

  //RUTA TEMPORAL PARA OMITIR LA AUTENTICACIÓN
  enter(){
    this.router.navigate([ '/' ])
  }

}

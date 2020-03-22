import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //DIGITAR LA CONEXIÓN Y MÉTODOS PARA LISTAR LOS PRODUCTOS
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

//FUNCIÓN PARA ENRUTAR COMPONENTES MEDIANTE BOTONES
  addEmploye(){
    this.router.navigate( ['/agregar-producto'] );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.css']
})
export class PagPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  play(){
    this.router.navigate( ['/play'] );
  }

}

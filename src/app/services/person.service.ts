import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person,personSignIn} from '../models/person'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  API_URI= 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    getPersons() {
      return this.http.get(`${this.API_URI}/iniciarsesion`);
    }
    confirmateSingIn(data: personSignIn){
      return this.http.post(`${this.API_URI}/iniciarsesion/`, data);
    }
   /* getPerson (id:string){
      return this.http.get('${this.API_URI}/iniciarsesion/${id}');
    }
    deletePerson(id: string){
      return this.http.delete('${this.API_URI}/iniciardesesion/${id}')
    }
    CreatePerson(person: Person){
      return this.http.post(`${this.API_URI}/iniciarsesion/`, person);
    }
    updatePerson(id: string, updatePerson: Person):Observable <Person>{
      return this.http.put('${this.API_URI}/iniciarsesion/${id}', updatePerson);
    }*/
}

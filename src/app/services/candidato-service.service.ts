import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoServiceService {

  constructor(private http: HttpClient) {}
  getCandidato(id:string){
    return this.http.get(
      'http://localhost:3000/evaluacionRmairez/api/candidato/${id}' + id
    )
  }
}

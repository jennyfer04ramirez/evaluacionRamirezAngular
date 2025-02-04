import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoServiceService {

  constructor(private http: HttpClient) {}
  getCandidatos(){
    return this.http.get(
      'http://localhost:8080/evaluacionRamirez/api/candidatos/candidato' 
    )
  }

  ingresarCandidato(data:any){
    return this.http.post("http://localhost:8080/evaluacionRamirez/api/candidatos", data)
  }
}

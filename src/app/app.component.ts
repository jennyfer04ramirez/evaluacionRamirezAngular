import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatoServiceService } from './services/candidato-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'evaluacionRamirezAngular';
  nombre = "";
  apellido= ""
  nombreBinomio = ""
  candidato: any;
  binomios:any[] = [];
  candidatos:any[]=[]
  constructor(private service: CandidatoServiceService) {}

  ngOnInit(): void {}

  ingresarCandidato (
    
  ){
    const data ={
      nombre:this.nombre,
      apellido:this.apellido,
      binomio:{
        nombre:this.nombreBinomio
      }
    }
    this.service.ingresarCandidato(data)
    .subscribe((api)=>{
      alert("SE ha ingresado correctamente")
    }, (error)=>{
      alert("Error: " + error)
    })
  }
}

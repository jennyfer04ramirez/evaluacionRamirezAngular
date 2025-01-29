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
  id = "";
  candidato: any;
  binomios:any[] = [];

  constructor(private service: CandidatoServiceService) {}

  ngOnInit(): void {}

  buscarPorId() {
    if (!this.id) {
      alert('Debe ingresar un id');
      return;
    }
    this.service.getCandidato(this.id).subscribe(
      (data) => {
      (data:any) => {
      this.candidato = data.candidato;
      this.binomios = data.binomio;
      }
    },
    (error) => {
      console.log(error);
      alert(error.error);
    });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatoServiceService } from './services/candidato-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'evaluacionRamirezAngular';
  id = "";
  candidato: any[] = [];
  binomio:any[] = [];

  constructor(private service: CandidatoServiceService) {}

  ngOnInit(): void {}

  buscarPorId() {
    this.service.getCandidato(this.id).subscribe((data) => {
      (data:any) => {
      this.candidato = data.candidato;
      if(this.candidato.length > 0){
        //this.binomio = this.service.calcularBinomio(this.candidato[0].puntaje);
      } else {
        this.binomio = [];
      }
      }
    });
  }
}

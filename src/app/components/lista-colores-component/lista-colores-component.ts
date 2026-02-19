import { Component, inject } from '@angular/core';
import { ClientesService } from '../../services/ClientesService';

@Component({
  selector: 'app-lista-colores-component',
  standalone: true,
  imports: [],
  templateUrl: './lista-colores-component.html',
  styleUrl: './lista-colores-component.css',
})
export class ListaColoresComponent {
  private clientesService = inject(ClientesService) //inyeccion del service, es como hacer un extends en java

  colores = this.clientesService.getColores();//tienes acceso a metodos y atributos del service
}

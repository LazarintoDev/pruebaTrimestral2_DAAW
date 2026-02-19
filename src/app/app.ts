import { Component, signal } from '@angular/core';
import { ListaColoresComponent } from "./components/lista-colores-component/lista-colores-component";
import { FormTempateComponent } from "./components/form-tempate-component/form-tempate-component";
import { FormReactivoComponent } from './components/form-reactivo-component/form-reactivo-component';
import { FormValidadoDamian } from "./components/form-validado-damian/form-validado-damian";

@Component({
  selector: 'app-root',
  imports: [ListaColoresComponent, FormTempateComponent, FormReactivoComponent, FormValidadoDamian],//importar componentes
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tema7-angular');
}

import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-tempate-component',
  imports: [FormsModule, JsonPipe], //FormsModule = caja de herramientas del ngModule, ngForms, ngSubmit...
  templateUrl: './form-tempate-component.html',
  styleUrl: './form-tempate-component.css',
})

export class FormTempateComponent {
  //metodo va a ser llamado desde el html
  onSubmit (form: NgForm){ //form es la variable que recoge el formulario que viene del html (property binding -> entrada)
    console.log('Template form enviado: ', form.value)
  }
}

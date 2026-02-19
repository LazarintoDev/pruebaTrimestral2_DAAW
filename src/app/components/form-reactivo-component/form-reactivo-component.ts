import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';//con esto importamos muchas cosas de reactive forms

@Component({
  selector: 'app-form-reactivo-component',
  imports: [ReactiveFormsModule, JsonPipe],//importamos form reactive y JsonPipe
  templateUrl: './form-reactivo-component.html',
  styleUrl: './form-reactivo-component.css',
})
export class FormReactivoComponent {

  //form es instancia de la clase FormGroup, luego va al html con [] -> property binding (entrada)
  form = new FormGroup({//colocar la llave
    nombre: new FormControl(''), //atributo del formulario a captar y enviar al service (logica negocio)
    edad: new FormControl(''),
    apellidos: new FormControl(''),
    direccion: new FormControl(''),
  })

  //es llamado cuando ocurra el event binding ngSubmit (salida) en el html, enviar formulario
  onSubmit(){
    console.log('Formulario reactivo: ', this.form.value)//muestra por consola los valores del fomulario
  }

  
}

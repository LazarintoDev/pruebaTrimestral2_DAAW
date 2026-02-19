import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validado-damian',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-validado-damian.html',
  styleUrl: './form-validado-damian.css',
})
export class FormValidadoDamian {

  //Validador personlizado
  rangoEdadValidator(min: number, max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const raw = control.value; if (raw === null || raw === '') return null;
      // lo gestiona required 
      const edad = Number(raw);
      if (Number.isNaN(edad)) {
        return { rangoEdad: { message: 'La edad debe ser un número' } };
      }
      if (edad >= min && edad <= max) {
        return null;

      } else {
        return { rangoEdad: { message: `La edad debe estar entre ${min} y ${max}` } };
      }
    };
  }

  form = new FormGroup({
    nombre: new FormControl('',
      [Validators.required,
      Validators.pattern('^\w{30}$')]
    ),
    email: new FormControl('',
      [Validators.required,
      Validators.email]
    ),
    edad: new FormControl('',
      [Validators.required,
      this.rangoEdadValidator(18, 65)]
    ),
  })

  onSubmit() {
    if (this.form.valid) {
      console.log("Formulario valido", this.form.value)
    }
  }


}

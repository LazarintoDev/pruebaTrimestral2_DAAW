import { Injectable } from '@angular/core';

@Injectable({//esto se crea automático cuando ng new sercive...Siempre va con el servicio
  providedIn: 'root',
})

export class ClientesService {//denominar la clase como Service, constructor de clase
  private colores: string[] = ['blue', 'red', 'violet', 'yellow', 'green']
 
  getColores(): string[]{
    return this.colores;
  }
}

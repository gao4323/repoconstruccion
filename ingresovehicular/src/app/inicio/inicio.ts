import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  // Datos de las tarjetas de información
  items = [
    { titulo: 'Registro', texto: 'Anota la placa, el tipo de vehículo y el conductor.' },
    { titulo: 'Horarios', texto: 'Consulta la hora exacta en que ingresó cada vehículo.' },
    { titulo: 'Seguridad', texto: 'Mantén identificados a todos los que acceden al local.' },
  ];
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  imports: [],
  templateUrl: './ingresos.html',
  styleUrl: './ingresos.css',
})
export class Ingresos {
  // Lista de vehículos que se muestra en la tabla
  ingresos = [
    { id: 1, placa: 'ABC-123', tipo: 'Automóvil', conductor: 'Carlos Ramírez', hora: '07:45', estado: 'En local' },
    { id: 2, placa: 'XYZ-987', tipo: 'Camioneta', conductor: 'María Quispe', hora: '08:10', estado: 'En local' },
    { id: 3, placa: 'M4K-221', tipo: 'Motocicleta', conductor: 'Luis Mamani', hora: '08:32', estado: 'Salió' },
    { id: 4, placa: 'F7T-554', tipo: 'Camión', conductor: 'Jorge Huanca', hora: '09:05', estado: 'En local' },
    { id: 5, placa: 'B2P-310', tipo: 'Automóvil', conductor: 'Ana Condori', hora: '09:40', estado: 'Salió' },
  ];
}
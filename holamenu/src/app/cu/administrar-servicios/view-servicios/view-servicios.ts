import { Component } from '@angular/core';
import { ModalServicio } from '../modal-servicio/modal-servicio';

@Component({
  selector: 'app-view-servicios',
  imports: [ModalServicio],
  templateUrl: './view-servicios.html',
  styleUrl: './view-servicios.css',
})
export class ViewServicios {

  servicios: any[] = [
    { id: 1, nombre: 'Instalación', descripcion: 'Instalación de equipos', precio: 80 },
    { id: 2, nombre: 'Mantenimiento', descripcion: 'Mantenimiento preventivo', precio: 120 },
    { id: 3, nombre: 'Soporte técnico', descripcion: 'Atención remota o presencial', precio: 60 },
    { id: 4, nombre: 'Capacitación', descripcion: 'Capacitación al personal', precio: 200 }
  ];

  mostrarModal = false;
  servicioSeleccionado: any = null;

  // Abre el modal con una copia del servicio elegido
  editarServicio(servicio: any) {
    this.servicioSeleccionado = { ...servicio };
    this.mostrarModal = true;
  }

  guardarServicio(editado: any) {
    this.servicios = this.servicios.map(s => (s.id === editado.id ? editado : s));
    console.log('Servicio guardado:', editado);
    console.log('Lista actualizada:', this.servicios);
    this.cerrarModal();
  }

  // Cierra el modal y limpia la selección
  cerrarModal() {
    this.mostrarModal = false;
    this.servicioSeleccionado = null;
  }
}
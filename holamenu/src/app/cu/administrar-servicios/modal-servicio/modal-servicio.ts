import { Component, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-servicio',
  imports: [FormsModule],
  templateUrl: './modal-servicio.html',
  styleUrl: './modal-servicio.css',
})
export class ModalServicio {

  servicio = input<any>();
  cerrar = output<void>();
  guardar = output<any>();

  // Emite el servicio editado si el formulario es válido
  onGuardar(form: NgForm) {
    if (form.valid) {
      this.guardar.emit(this.servicio());
    }
  }
}
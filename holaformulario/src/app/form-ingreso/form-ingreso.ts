import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-ingreso',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-ingreso.html',
  styleUrl: './form-ingreso.css',
})
export class FormIngreso {

  lista: any[] = [];

  onSubmit(form: NgForm) {
    this.lista.push(form.value);
  }
}


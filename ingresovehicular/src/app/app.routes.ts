import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Ingresos } from './ingresos/ingresos';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
    { path: '', component: Inicio, title: 'Registro de Ingreso Vehicular' },
    { path: 'inicio', component: Inicio, title: 'Registro de Ingreso Vehicular' },
    { path: 'ingresos', component: Ingresos, title: 'Registro de Ingreso Vehicular' },
    { path: '**', component: NoEncontrado, title: 'Recurso no encontrado' }
];

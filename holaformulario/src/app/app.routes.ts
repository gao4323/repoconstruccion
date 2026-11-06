import { Routes } from '@angular/router';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormIngreso } from './form-ingreso/form-ingreso';

export const routes: Routes = [
    /*{ path: '', component: FormPlantilla, title:'Formulario basado en plantilla' }*/
    { path: '', component: FormIngreso, title:'Formulario de Ingreso Veicular' }
];
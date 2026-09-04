package edu.pe.uls.cos.demoexepciones;

import java.util.Date;

import org.springframework.stereotype.Service;

@Service 
public class ServiceProductos { 
    
    public Producto registrarProducto(Producto nuevo) throws ProductoInvalidoException { 
      
        if (nuevo.getNombre() == null || nuevo.getNombre().length() < 2) {
            throw new ProductoInvalidoException("El producto debe tener el nombre de al menos dos caracteres");
        }
         
        if(nuevo.getNombre().equals("mouse")){
            throw new ProductoRepetidoExepcion("El producto ya exixte");
        }

        Date ahora = new Date(); 
        nuevo.setId((int) ahora.getTime()); 
        return nuevo; 
    } 
}
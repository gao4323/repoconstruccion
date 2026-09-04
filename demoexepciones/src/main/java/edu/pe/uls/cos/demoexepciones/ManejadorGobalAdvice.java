package edu.pe.uls.cos.demoexepciones;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice 
public class ManejadorGobalAdvice {

    @ExceptionHandler(ProductoInvalidoException.class)
    public ResponseEntity<String> manejarProductoInvalido(ProductoInvalidoException ex) {
        return ResponseEntity .status(HttpStatus.BAD_REQUEST) .body(ex.getMessage());
    }

    @ExceptionHandler(ProductoRepetidoExepcion.class)
    public ResponseEntity<String> manejarGenerico(Exception ex) {
        return ResponseEntity .status(HttpStatus.INTERNAL_SERVER_ERROR) .body(ex.getMessage());
    }
}


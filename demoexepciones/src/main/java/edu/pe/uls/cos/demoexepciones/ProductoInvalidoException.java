package edu.pe.uls.cos.demoexepciones;

public class ProductoInvalidoException extends RuntimeException {
    
    public ProductoInvalidoException(String msg) {
        super(msg);
    }
}
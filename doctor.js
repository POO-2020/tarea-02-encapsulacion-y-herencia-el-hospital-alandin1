import Nombre from "./nombre.js"

export default class Doctor {
    /**
     * 
     * @param {string} cedula 
     * @param {string} especialidad 
     * @param {Nombre} nombre 
     * @param {number} telefono 
     */
    constructor({cedula, especialidad, nombre, telefono}){
        this._cedula = cedula;
        this._especialidad = especialidad;
        this._nombre = nombre;
        this._telefono = telefono;
        
    }

    getPaternoD(){
        return this._nombre.getPaterno()
    }

    getPerfil(){
        return `${this._cedula} ${this._especialidad}, ${this._nombre.getNombreCompleto()}, ${this._telefono}`;
    }
}
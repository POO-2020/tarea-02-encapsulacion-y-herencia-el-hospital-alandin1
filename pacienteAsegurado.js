import Paciente from "./paciente.js"

export default class PacienteAsegurado extends Paciente{
    constructor(nombre, fechaNacimiento, telefono, numeroPoliza, vigencia, compañia){
        super(nombre, fechaNacimiento, telefono)
        this._numeroPoliza = numeroPoliza
        this._vigencia = vigencia
        this._compañia = compañia 
    }
    
    getPerfil(){
        return `${this._nombre.getNombreCompleto()} ${this._fechaNacimiento.getFecha()} ${this._telefono} ${this._numeroPoliza} ${this._vigencia.getFecha()} ${this._compañia}`
    }
}
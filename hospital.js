import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"

export default class Hospital {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} direccion
     * @param {Doctor} doctor
     * @param {Cita} cita
     */
    constructor({nombre, direccion}){
        this._nombre = nombre;
        this._direccion = direccion;
        this._doctores = new Array();
        this._citas = new Array();
    }

    

    _encontrarDoc(doctor){
        let resultado = this._doctores.find(d => d.esIgual(doctor))
        return resultado
    }

    registrarDoctor(doctor){
        if (this._encontrarDoc(doctor) !== undefined){
            return false
        }
        this._doctores.push(doctor)
        return true
    }

    listarDoctores(){
        this._doctores.forEach((doctor, i) => {
            console.log(`${i} ${doctor.getPerfil()}`)
        });
    }

    registrarCita(cita){
        this._citas.push(cita);
    }

    listarCitas(){
        this._citas.forEach((cita, i) => {
            console.log(`${i} ${cita.getCita()}`)
        });
    }
}
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

    registrarDoctor(doctor){
        this._doctores.push(doctor);
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
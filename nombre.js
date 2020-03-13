export default class Nombre {
    /**
     * 
     * @param {string} nombre Nombre 
     * @param {string} aMaterno Apellido Materno
     * @param {string} aPaterno Apellido Paterno
     */
    constructor(nombre, aPaterno, aMaterno){
        this.nombre = nombre;
        this.aPaterno = aPaterno
        this.aMaterno = aMaterno;
        ;
    }

    getNombreCompleto(){
        return `${this.nombre} ${this.aPaterno} ${this.aMaterno}`
    }

    getApellidoNombre(){
        return `${this.aPaterno} ${this.aMaterno} ${this.nombre}`
    }

    getIniciales(){
        return `${this.nombre.charAt(0)}${this.aPaterno.charAt(0)}${this.aMaterno.charAt(0)}`
    }
}
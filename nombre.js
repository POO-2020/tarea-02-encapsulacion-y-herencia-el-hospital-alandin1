export default class Nombre {
    /**
     * 
     * @param {string} nombre Nombre 
     * @param {string} aMaterno Apellido Materno
     * @param {string} aPaterno Apellido Paterno
     */
    constructor(nombre, aPaterno, aMaterno){
        this._nombre = nombre;
        this._aPaterno = aPaterno;
        this._aMaterno = aMaterno;
    
    }

    getPaterno(){
        return this._aPaterno
    }

    getNombreCompleto(){
        return `${this._nombre} ${this._aPaterno} ${this._aMaterno}`
    }

    getApellidoNombre(){
        return `${this._aPaterno} ${this._aMaterno} ${this._nombre}`
    }

    getIniciales(){
        return `${this._nombre.charAt(0)}${this._aPaterno.charAt(0)}${this._aMaterno.charAt(0)}`
    }
}
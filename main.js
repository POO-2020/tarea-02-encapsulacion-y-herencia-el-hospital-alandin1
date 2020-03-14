import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js";
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./pacienteAsegurado.js"

var datosPaciente = { fechaNacimiento: new Fecha(4,11,2011), telefono: 3123045861, nombre: new Nombre("ana", "landom", "lapexz")}
var datosPacienteA =  { fechaNacimiento: new Fecha(4,11,2011), telefono: 3123045861, nombre: new Nombre("ana", "landom", "lapexz"), numeroPoliza: 918, vigencia: new Fecha(11,12,2021), compañia: "Doña bacteria" }

var datosDoc1 = {cedula: "ETF59", especialidad: "Cardiólogo", nombre: new Nombre("Manuel", "Ávila", "Camacho"), telefono: 3135620}
var datosDoc2 = {cedula: "ETF58", especialidad: "Cardiólogo", nombre: new Nombre("Carlos", "Ávila", "Camacho"), telefono: 3135620}
var datosDoc3 = {cedula: "ETF57", especialidad: "Cardiólogo", nombre: new Nombre("Ángel", "Ávila", "Camacho"), telefono: 3135620}
var datosDoc4 = {cedula: "ETF56", especialidad: "Cardiólogo", nombre: new Nombre("Cevin", "Ávila", "Camacho"), telefono: 3135620}

var datosCita1 = {fecha: new Fecha(20,2,2020), hora: new Tiempo(6,30,"pm"), doctor: new Doctor(datosDoc1), paciente: new Paciente(datosPaciente)}
var datosCita2 = {fecha: new Fecha(24,2,2020), hora: new Tiempo(6,30,"pm"), doctor: new Doctor(datosDoc2), paciente: new Paciente(datosPaciente)}

var datosHospital = {nombre: "Colima", direccion: "Felipe Cebolla #15" }

class Main {
    constructor(){
        this.hospital = new Hospital(datosHospital);
    }
    pruebaFecha () {
        let fecha = new Fecha(15,2,2021);
        console.log(fecha.getAños());
        console.log(fecha.getMeses());
        console.log(fecha.getSemanas());
        console.log(fecha.getDias());
        console.log(fecha.getFecha());
        console.log(fecha.getDiaFecha());
    }

    pruebaTiempo(){
        let hora = new Tiempo(6, 24, "pm");
        console.log(hora.getFormato12());
        console.log(hora.getFormato24());
    }

    pruebaNombre(){
        let nombre = new Nombre("Ana", "Landín", "López");
        console.log(nombre.getNombreCompleto());
        console.log(nombre.getApellidoNombre());
        console.log(nombre.getIniciales());
    }


    
    pruebaPaciente(){
        let paciente = new Paciente(datosPaciente)
        console.log(paciente.getPerfil());

        let pacienteS = new PacienteAsegurado(datosPacienteA);
        console.log(pacienteS.getPerfil());
    }

    pruebaDoctor(){
        
        let doctor = new Doctor(datosDoc1);
        console.log(doctor.getPerfil());
    }

    pruebaCita(){
        
        let cita = new Cita(datosCita1);
    console.log(cita.getCita());
    }

    pruebaHospital(){
        let doctor1 = new Doctor(datosDoc1);
        let doctor2 = new Doctor(datosDoc2);
        let doctor3 = new Doctor(datosDoc3);
        let doctor4 = new Doctor(datosDoc4);

        this.hospital.registrarDoctor(doctor1);
        this.hospital.registrarDoctor(doctor2);
        this.hospital.registrarDoctor(doctor3);
        this.hospital.registrarDoctor(doctor4);
        this.hospital.listarDoctores();
        }
    
        pruebaCitas(){
            let cita1 = new Cita(datosCita1);
            let cita2 = new Cita(datosCita2);
            this.hospital.registrarCita(cita1);
            this.hospital.registrarCita(cita2);
            this.hospital.listarCitas();
        }
} 

    let app = new Main();

    app.pruebaFecha();
    app.pruebaTiempo();
    app.pruebaNombre();
    app.pruebaPaciente();
    app.pruebaDoctor();
    app.pruebaHospital();
    app.pruebaCita();
    app.pruebaCitas();
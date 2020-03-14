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

class Main {
    constructor(){
        this.hospital = new Hospital("Colima", "Felipe Cebolla #15");
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
        let doctor = new Doctor("ETF59", "Cardiólogo", new Nombre("Manuel", "Ávila", "Camacho"), 3135620);
        console.log(doctor.getPerfil());
    }

    pruebaCita(){
        let datosCita = {fecha: new Fecha(20,2,2020), hora: new Tiempo(6,30,"pm"), doctor: new Doctor("ETF59", "Cardiólogo", new Nombre("Manuel", "Ávila", "Camacho"), 3135620), paciente: new Paciente(datosPaciente)}
        let cita = new Cita(datosCita);
    console.log(cita.getCita());
    }

    pruebaHospital(){
        let doctor1 = new Doctor("ER34", "Dermatólogo", new Nombre("Carlos", "Ochoa","Alcaraz"), 2765326);
        let doctor2 = new Doctor("ER34", "Dermatólogo", new Nombre("Carlos", "Ochoa","Alcaraz"), 2765326);
        let doctor3 = new Doctor("ER34", "Dermatólogo", new Nombre("Carlos", "Ochoa","Alcaraz"), 2765326);
        let doctor4 = new Doctor("ER34", "Dermatólogo", new Nombre("Carlos", "Ochoa","Alcaraz"), 2765326);

        this.hospital.registrarDoctor(doctor1);
        this.hospital.registrarDoctor(doctor2);
        this.hospital.registrarDoctor(doctor3);
        this.hospital.registrarDoctor(doctor4);
        this.hospital.listarDoctores();
        }
    
        pruebaCitas(){
            let cita1 = new Cita(new Fecha(24,2,2020), new Tiempo(5,30,"pm"), new Doctor("ER34", "Dermatólogo", new Nombre("Carlos", "Ochoa","Alcaraz"), 2765326), new Paciente(new Nombre("Ana","Landin","Lopez"), new Fecha(15,5,1995),2894563));
            let cita2 = new Cita(new Fecha(24,2,2020), new Tiempo(5,30,"pm"), new Doctor("ER34", "Dermatólogo", new Nombre("Carlos", "Ochoa","Alcaraz"), 2765326), new Paciente(new Nombre("Ana","Landin","Lopez"), new Fecha(15,5,1995),2894563));
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
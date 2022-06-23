class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }

   
    mostrarGeneracion(){ 

        if(this.nacimiento >= 1930 && this.nacimiento <= 1948){
            document.write(`<br>
            <ul>
            <li>Generación : Silent Generation(Los niños de la posguerra).</li>
            <li>Poblacíon : 6.300.000.</li>
            <li>Circunstancia Histórica : Conflictos bélicos.</li>
            <li>Rasgo Característico : Austeridad.</li>
            </ul>`); 
        } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968){
            document.write(`<br>
            <ul>
            <li>Generación : Baby Boom.</li>
            <li>Poblacíon : 12.200.000.</li>
            <li>Circunstancia Histórica : Paz y explosión demográfica.</li>
            <li>Rasgo Característico : Ambición.</li>
            </ul>`); 
        } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980){
            document.write(`<br>
            <ul>
            <li>Generación : Generación X.</li>
            <li>Poblacíon : 9.300.000.</li>
            <li>Circunstancia Histórica : Crisis del 73 y transición española.</li>
            <li>Rasgo Característico : Obsesión por el exito.</li>
            </ul>`); 
        } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993){
            document.write(`<br>
            <ul>
            <li>Generación : Genración Y.</li>
            <li>Poblacíon : 7.200.000.</li>
            <li>Circunstancia Histórica : Inicio de la digitalización.</li>
            <li>Rasgo Característico : Frustración.</li>
            </ul>`); 
        } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010){
            document.write(`<br>
            <ul>
            <li>Generación : Generación Z.</li>
            <li>Poblacíon : 7.800.000.</li>
            <li>Circunstancia Histórica : Expansión masiva de internet.</li>
            <li>Rasgo Característico : Irreverncia.</li>
            </ul>`); 
        } else {
            document.write('Los datos ingresados no pertenecen a ninguna de las generaciones.')
        }
    }

    esMayorDeEdad(){
        if( this.nacimiento < 2004){
            document.write(`Es mayor de edad.`);
        } else {
            document.write(`Es menor de edad.`);
        }
    }

    mostrarDatos(){
        document.write(`<br>
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>dni: ${this.dni}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Nacimiento: ${this.nacimiento}</li>
        </ul>
        `);
    }

    generarDni(){
        let dni = Math.floor(Math.random() * 99999999) + 1;
        this.dni=dni;
        document.write('EL numero de dni aleatorio es: '+this.dni+'</br>');
    }
}

let arrayAgenda = [5];

function generarPersona(){

    for ( let i = 0; i < arrayAgenda.length; i++) {

        let nombre=prompt("ESCRIBA EL NOMBRE:");
        let edad=prompt("ESCRIBA LA EDAD:");
        let dni=prompt("ESCRIBA EL DNI:");
        let sexo=prompt("ESCRIBA EL SEXO (F/M):");
        let peso=prompt("ESCRIBA EL PESO EN KG:");
        let altura=prompt("ESCRIBA LA ALTURA EN CM:");
        let nacimiento=prompt("ESCRIBA EL AÑO DE NACIMIENTO (Ej:'1990'):");
        persona = new Persona(nombre,edad,dni,sexo,peso,altura,nacimiento);
        arrayAgenda[i] = persona;
        document.write(persona);
        document.write(arrayAgenda[i]);
        console.log(arrayAgenda[i]);
        
    }
}

let persona;
let acceso = prompt('DESA INGRESAR LAS PERSONAS (SI/NO)');

if(acceso == "SI" || acceso == "si")
{

generarPersona();
        
let opciones = prompt (`ELIJA UNA OPCION:
(1) Mostrar Generacion:
(2) Es Mayor de Edad?:
(3) Mostrar Persona:
(4) Generar Dni: `);


switch(opciones){
    
    case '1':
        persona.mostrarGeneracion();
        break;  
         
    case '2':
        persona.esMayorDeEdad();
        break;  
        
    case '3':
        persona.mostrarDatos();
        break;  
        
    case '4':
        persona.generarDni(); 
        break;  

    default:
        document.write('Ingreso una opcion erronea');  
        break;                     
}

}
else
{
    document.write('Usted Salió del programa'); 
}
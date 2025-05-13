export interface Cliente {
    nombre?: string;
    paterno?: string;
    materno?: string;
    matricula?: string;
    nivel?: string;
    carrera?: string;
    dependencia?: string;
    semestre?: string;
    grupo?: string;
    correo?: string;
    telefono?: string;
    ciclo_escolar?:string;
    genero?:string;
    domicilio?:Domicilio
}
export interface Domicilio {
    cp?:number;
    estado:string;
    pais:string;
    /*estadoId:number;
    paisId:number;*/
}


//this.cliente = [{ Nombre:this.valNombre, Paterno:this.valPaterno, Materno:this.valMaterno, 
//Matricula: this.valMatricula, Nivel: this.valNivel, Carrera:this.valCarrera, Dependencia:this.valEscuela }];

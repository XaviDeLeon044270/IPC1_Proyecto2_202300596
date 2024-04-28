export interface CustomerEntry {
    carnet: string;
    nombres: string;
    apellidos: string;
    genero: string;
    facultad: string;
    carrera: string;
    correo: string;
    contraseña: string;
}

export interface CustomerData extends CustomerEntry {
    id: number;
}
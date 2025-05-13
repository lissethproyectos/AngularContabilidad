export interface Evento {
    id?: number;
    cve_evento?: string;
    fecha_inicial?: string;
    fecha_final?: string;
    tipo_participante?: number;
    escuela?: number;
    descripcion?: string;
    observaciones?: string;
    componentes_extras?: string;
    exclusivo?: string;
    status?: string;
    vigencia_dias:number;
    nivel?:string;
}

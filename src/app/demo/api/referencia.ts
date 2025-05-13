import { Cliente } from "./cliente";
import { ConceptoAsig } from "./concepto";

export interface FichaRef {
    idReferencia?: number;
    fichaReferenciada?: string;
    dias_Vigencia?: string;
    total?: number;
    fecha_Vigencia?: string;
    evento?: string;
    observaciones?: string;
    cliente?: Cliente;
    conceptos?:ConceptoAsig[];    
}
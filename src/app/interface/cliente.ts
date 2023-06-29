import { IEndereco } from "./endereco";

export interface ICliente {

    idClienteWeb:number;
    nome: string;
    contato: string;
    endereco:IEndereco;
    

}

import {UsuarioServidor} from './UsuarioServidor';

export class ContenedorUsuarioServidor {


    constructor(tipoConsulta: string, lstServidores: Array<UsuarioServidor>) {
        this.tipoConsulta = tipoConsulta;
        this.lstServidores = lstServidores;
    }

    tipoConsulta: string;
    lstServidores: Array<UsuarioServidor> = [];
}

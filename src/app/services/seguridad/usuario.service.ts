import {Injectable} from '@angular/core';
import {UtilsService} from '../commons/utils.service';
import {UsuarioAppp} from '../../../classes/UsuarioApp';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private utilService: UtilsService) {
    }

    public registrarUsuario = function (usuario: UsuarioAppp) {
        this.utilService.procEjecucionGenercia(usuario, 'dbo.proc_xml_registrar_usuario_app').subscribe(resp => {
            console.log(resp);
        }, error => {
            console.error(error);
        });

    };


}

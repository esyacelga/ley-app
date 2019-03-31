import {Injectable} from '@angular/core';
import {UtilsService} from '../commons/utils.service';
import {UsuarioAppp} from '../../../classes/UsuarioApp';
import {ToastController} from '@ionic/angular';
import {LoadingService} from '../commons/loading.service';
import {GenericAsyncService} from '../commons/generic-async.service';
import {PROC_XML_REGISTRAR_USUARIO} from '../../config/config';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {


    constructor(private utilService: UtilsService, private notify: ToastController, protected loading: LoadingService, private genericService: GenericAsyncService) {
    }


    public registrarUsuario = function (usuario: UsuarioAppp) {
        return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO);
    };


}


import {Injectable} from '@angular/core';
import {UtilsService} from '../commons/utils.service';
import {UsuarioAppp} from '../../../classes/UsuarioApp';
import {ToastController} from '@ionic/angular';
import {LoadingService} from '../commons/loading.service';
import {GenericAsyncService} from '../commons/generic-async.service';
import {PROC_XML_REGISTRAR_USUARIO, PROC_XML_REST_REGISTRO_USUARIO} from '../../config/config';
import {RequestOptions} from '../../../classes/RequestOptions';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {


    constructor(private utilService: UtilsService, private notify: ToastController, protected loading: LoadingService, private genericService: GenericAsyncService) {
    }


    public registrarUsuario = function (usuario: UsuarioAppp) {
        const requestOptions = new RequestOptions();
        requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
        return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
    };


    /*    public verificarUsuario = function (usuario: UsuarioAppp) {
            this.gener
        }*/

}


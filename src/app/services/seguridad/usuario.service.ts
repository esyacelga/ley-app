import {Injectable} from '@angular/core';
import {UsuarioAppp} from '../../../classes/UsuarioApp';
import {GenericAsyncService} from '../commons/generic-async.service';
import {PROC_XML_CONSULTAS_USUARIO, PROC_XML_REGISTRAR_USUARIO, PROC_XML_REST_REGISTRO_USUARIO} from '../../config/config';
import {RequestOptions} from '../../../classes/RequestOptions';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    authState;

    constructor(private genericService: GenericAsyncService) {

    }


    public isAuthenticated() {
        return this.authState;
    }

    public setAuthenticated = function (valor: Boolean) {
        this.authState = valor;
    };
    public registrarUsuario = function (usuario: UsuarioAppp) {
        const requestOptions = new RequestOptions();
        requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
        return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
    };


    public verificarUsuario = function (parametro: string) {
        const requestOptions = new RequestOptions();
        requestOptions.responseType = 1;
        const obj = {
            parametroXML: parametro,
            tipoConsulta: 'OBTENERUSUARIO'
        };
        return this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
    };
    public obtenerUsuarioPorId = function (parametro: string) {
        const requestOptions = new RequestOptions();
        requestOptions.responseType = 1;
        const obj = {
            parametroXML: parametro,
            tipoConsulta: 'obtenerUsuarioPorId'
        };
        return this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
    };

}


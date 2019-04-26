import {Injectable} from '@angular/core';
import {UsuarioApp} from '../../../classes/UsuarioApp';
import {GenericAsyncService} from '../commons/generic-async.service';
import {PROC_XML_CONSULTAS_USUARIO, PROC_XML_REGISTRAR_USUARIO, PROC_XML_REST_REGISTRO_USUARIO} from '../../config/config';
import {RequestOptions} from '../../../classes/RequestOptions';
import {UsuarioServidor} from '../../../classes/UsuarioServidor';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    usuario: UsuarioApp;
    authState;

    constructor(private genericService: GenericAsyncService) {

    }


    public setUsuario = function (usario: UsuarioApp) {
        this.usuario = usario;
    };

    public isAuthenticated() {
        return this.authState;
    }

    public setAuthenticated = function (valor: Boolean) {
        this.authState = valor;
    };
    public registrarUsuario = function (usuario: UsuarioApp) {
        const requestOptions = new RequestOptions();
        requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
        usuario.opcional = 'CREACION';
        return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
    };

    public actualizarUsuario = function (usuario: UsuarioApp) {
        const requestOptions = new RequestOptions();
        requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
        usuario.opcional = 'ACTUALIZACION';
        console.log('Empieza la actualizacion');
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

    async obtenerServidoresPorUsuario(usuario: string) {
        const requestOptions = new RequestOptions();
        let lstUsuarioServidor: Array<UsuarioServidor> = [];
        const obj = {
            parametroXML: usuario,
            tipoConsulta: 'OBTENERSERVIDORES'
        };
        // @ts-ignore
        lstUsuarioServidor = await this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
        return lstUsuarioServidor;

    }

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


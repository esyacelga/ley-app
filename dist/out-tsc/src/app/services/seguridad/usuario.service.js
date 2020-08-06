import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GenericAsyncService } from '../commons/generic-async.service';
import { PROC_XML_CONSULTAS_USUARIO, PROC_XML_REGISTRAR_USUARIO, PROC_XML_REST_REGISTRO_USUARIO } from '../../config/config';
import { RequestOptions } from '../../../classes/RequestOptions';
import { ContenedorUsuarioServidor } from '../../../classes/ContenedorUsuarioServidor';
import { UtilsService } from '../commons/utils.service';
var UsuarioService = /** @class */ (function () {
    function UsuarioService(genericService, utils) {
        this.genericService = genericService;
        this.utils = utils;
        this.playerId = null;
        this.setUsuario = function (usario) {
            this.usuario = usario;
        };
        this.setAuthenticated = function (valor) {
            this.authState = valor;
        };
        this.registrarUsuario = function (usuario) {
            var requestOptions = new RequestOptions();
            requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
            usuario.opcional = 'CREACION';
            return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
        };
        this.actualizarUsuario = function (usuario) {
            var requestOptions = new RequestOptions();
            requestOptions.restUrl = PROC_XML_REST_REGISTRO_USUARIO;
            usuario.opcional = 'ACTUALIZACION';
            console.log('Empieza la actualizacion');
            return this.genericService.ejecucionGenerica(usuario, PROC_XML_REGISTRAR_USUARIO, requestOptions);
        };
        /**
         * Este me todo se ejecuta cuando en el guard de la aplicacion
         * no esta registrado el player id
         *
         */
        this.actualizarPlayerId = function () {
            console.log('Ingreso a actualizar el id de usuario');
            console.log(this.playerId);
            console.log(this.usuario.playerID);
            if (this.playerId !== null && this.playerId !== '' && this.usuario && this.usuario.playerID !== this.playerId) {
                console.log('El player id no coincide con la base por lo que se empieza a actualizar');
                this.usuario.playerID = this.playerId;
                this.actualizarUsuario(this.usuario);
            }
        };
        this.verificarUsuario = function (parametro) {
            var requestOptions = new RequestOptions();
            requestOptions.responseType = 1;
            var obj = {
                parametroXML: parametro,
                tipoConsulta: 'OBTENERUSUARIO'
            };
            return this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
        };
        this.obtenerUsuarioPorId = function (parametro) {
            var requestOptions = new RequestOptions();
            requestOptions.responseType = 1;
            var obj = {
                parametroXML: parametro,
                tipoConsulta: 'obtenerUsuarioPorId'
            };
            return this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions);
        };
    }
    UsuarioService.prototype.isAuthenticated = function () {
        return this.authState;
    };
    UsuarioService.prototype.guardarConfiguracion = function (lstUsuarioServidor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.genericService.getGenericObjects(new ContenedorUsuarioServidor('GUARDARCONFIGURACION', lstUsuarioServidor), PROC_XML_CONSULTAS_USUARIO)];
                    case 1:
                        // @ts-ignore
                        lstUsuarioServidor = _a.sent();
                        return [2 /*return*/, lstUsuarioServidor];
                }
            });
        });
    };
    UsuarioService.prototype.obtenerServidoresPorUsuario = function (usuario) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var requestOptions, lstUsuarioServidor, obj, lista;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestOptions = new RequestOptions();
                        lstUsuarioServidor = [];
                        obj = {
                            parametroXML: usuario,
                            tipoConsulta: 'OBTENERSERVIDORES'
                        };
                        return [4 /*yield*/, this.genericService.getGenericObjects(obj, PROC_XML_CONSULTAS_USUARIO, requestOptions)];
                    case 1:
                        lista = _a.sent();
                        lstUsuarioServidor = this.utils.modificarValoresBooleanos(lista, 'verNotificacion');
                        return [2 /*return*/, lstUsuarioServidor];
                }
            });
        });
    };
    UsuarioService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [GenericAsyncService, UtilsService])
    ], UsuarioService);
    return UsuarioService;
}());
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { UsuarioService } from './usuario.service';
import { UtilsService } from '../commons/utils.service';
var LoginStorageService = /** @class */ (function () {
    function LoginStorageService(storage, platform, usuarioSvc, utilSvc) {
        this.storage = storage;
        this.platform = platform;
        this.usuarioSvc = usuarioSvc;
        this.utilSvc = utilSvc;
    }
    LoginStorageService.prototype.cargarUsuarioStorage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                console.log('Inicializando storage');
                console.log('Storage inicializado ');
                _this.storage.get('usuario').then(function (val) {
                    var dataUser = null;
                    try {
                        dataUser = JSON.parse(JSON.stringify(val));
                        _this.usuarioSvc.usuario = dataUser;
                    }
                    catch (error) {
                        console.error(error);
                        console.log(error);
                    }
                    resolve(dataUser);
                }, function (reason) {
                    console.log(_this.user);
                });
            }
            else {
                if (localStorage.getItem('usuario')) {
                    _this.user = JSON.parse(localStorage.getItem('usuario'));
                    _this.usuarioSvc.usuario = _this.user;
                }
                resolve(_this.user);
            }
        });
        return promesa;
    };
    LoginStorageService.prototype.guardarStorage = function (usuario) {
        if (this.platform.is('cordova')) {
            // const obj = this.utilSvc.toXML(usuario);
            this.storage.set('usuario', usuario);
        }
        else {
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }
    };
    LoginStorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage, Platform, UsuarioService, UtilsService])
    ], LoginStorageService);
    return LoginStorageService;
}());
export { LoginStorageService };
//# sourceMappingURL=login-storage.service.js.map
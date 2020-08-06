import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../seguridad/usuario.service';
var PushService = /** @class */ (function () {
    function PushService(oneSignal, storage, usrSvc) {
        this.oneSignal = oneSignal;
        this.storage = storage;
        this.usrSvc = usrSvc;
        this.mensajes = [];
        this.pushLitener = new EventEmitter();
        this.cargarMensajes();
    }
    PushService.prototype.getMensajes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarMensajes()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.mensajes.slice()];
                }
            });
        });
    };
    PushService.prototype.configuracionInicial = function () {
        var _this = this;
        this.oneSignal.startInit('582185ec-15b2-44f7-9ecd-06021656c35a', '377548776950');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(function (noti) {
            // do something when notification is received
            console.log('Notificacion Recebida');
            console.log(JSON.stringify(noti));
            _this.notificacionRecibida(noti);
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (noti) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // do something when a notification is opened
                    return [4 /*yield*/, this.notificacionRecibida(noti.notification)];
                    case 1:
                        // do something when a notification is opened
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.oneSignal.getIds().then(function (info) {
            _this.userId = info.userId;
            console.log('USERID-GENERADO');
            console.log(info.userId);
            _this.usrSvc.playerId = info.userId;
        });
        this.oneSignal.endInit();
    };
    PushService.prototype.notificacionRecibida = function (noti) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, existePush;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarMensajes()];
                    case 1:
                        _a.sent();
                        payload = noti.payload;
                        existePush = this.mensajes.find(function (mensaje) {
                            return mensaje.notificationID === payload.notificationID;
                        });
                        if (existePush) {
                            return [2 /*return*/];
                        }
                        this.mensajes.unshift(payload);
                        this.pushLitener.emit(payload);
                        console.log('NOTIFICACION A GUARDAR');
                        return [4 /*yield*/, this.guardarMensajes(this.mensajes)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PushService.prototype.guardarMensajes = function (lstObj) {
        this.storage.set('mensajes', lstObj);
    };
    PushService.prototype.borrarMensajes = function (key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove(key)];
                    case 1:
                        _a.sent();
                        this.mensajes = [];
                        this.guardarMensajes(this.mensajes);
                        return [2 /*return*/];
                }
            });
        });
    };
    PushService.prototype.eliminarVariables = function () {
        this.storage.clear();
    };
    PushService.prototype.cargarMensajes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('mensajes')];
                    case 1:
                        _a.mensajes = (_b.sent()) || [];
                        return [2 /*return*/, this.mensajes];
                }
            });
        });
    };
    PushService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OneSignal, Storage, UsuarioService])
    ], PushService);
    return PushService;
}());
export { PushService };
//# sourceMappingURL=push.service.js.map
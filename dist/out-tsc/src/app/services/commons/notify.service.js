import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
var NotifyService = /** @class */ (function () {
    function NotifyService(oneSignal, storage) {
        this.oneSignal = oneSignal;
        this.storage = storage;
        this.mensajes = [];
        this.pushListener = new EventEmitter();
        this.cargarMensajes();
    }
    NotifyService.prototype.getMensajes = function () {
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
    NotifyService.prototype.configuracionInicial = function () {
        var _this = this;
        this.oneSignal.startInit('582185ec-15b2-44f7-9ecd-06021656c35a', '377548776950');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(function (noti) {
            // do something when notification is received
            console.log('Notificacion recivida', noti);
            _this.notificacionRecibida(noti);
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (noti) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); });
        /* this.oneSignal.getIds().then(info => {
           this.userId = info.userId;
           console.log('USERID-GENERADO');
           console.log(this.userId);
         });*/
        this.oneSignal.endInit();
    };
    NotifyService.prototype.notificacionRecibida = function (noti) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, existePush;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarMensajes()];
                    case 1:
                        _a.sent();
                        payload = noti.payload;
                        existePush = this.mensajes.find(function (mensaje) { return mensaje.notificationID === payload.notificationID; });
                        if (existePush) {
                            return [2 /*return*/];
                        }
                        this.mensajes.unshift(payload);
                        this.pushListener.emit(payload);
                        this.guardarMensajes();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotifyService.prototype.guardarMensajes = function () {
        this.storage.set('mensajes', this.mensajes);
    };
    NotifyService.prototype.cargarMensajes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('mensajes')];
                    case 1:
                        _a.mensajes = (_b.sent()) || [];
                        return [2 /*return*/];
                }
            });
        });
    };
    NotifyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OneSignal, Storage])
    ], NotifyService);
    return NotifyService;
}());
export { NotifyService };
//# sourceMappingURL=notify.service.js.map
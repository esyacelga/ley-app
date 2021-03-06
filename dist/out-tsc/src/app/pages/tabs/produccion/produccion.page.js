import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { PushService } from '../../../services/commons/push.service';
import { ModalController } from '@ionic/angular';
import { LogviewPage } from '../../../modals/system/logview/logview.page';
var ProduccionPage = /** @class */ (function () {
    function ProduccionPage(zone, pushSvc, modalController) {
        this.zone = zone;
        this.pushSvc = pushSvc;
        this.modalController = modalController;
        this.mensajes = [];
        this.customFilter = { additionalData: { ambiente: 'PROD' } };
    }
    ProduccionPage.prototype.borrarVariablres = function () {
        this.pushSvc.eliminarVariables();
    };
    ProduccionPage.prototype.borrarMensajes = function () {
        this.pushSvc.borrarMensajes('mensajes');
        this.ionViewWillEnter();
    };
    ProduccionPage.prototype.borrarMensaje = function (index) {
        this.mensajes.splice(index, 1);
        this.pushSvc.guardarMensajes(this.mensajes);
    };
    ProduccionPage.prototype.verMensaje = function (titulo, tipo, mensajeError) {
        this.presentModal(titulo, tipo, mensajeError);
    };
    ProduccionPage.prototype.presentModal = function (titulo, tipo, mensajeError) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: LogviewPage,
                            componentProps: { title: titulo, tipoError: tipo, mensaje: mensajeError }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProduccionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pushSvc.pushLitener.subscribe(function (noti) {
            _this.zone.run(function () {
                _this.mensajes.unshift(noti);
                console.log('Mensaje del subscriptor produccion..');
                console.log(JSON.stringify(noti));
                console.log('data: ' + JSON.stringify(_this.mensajes));
            });
        });
    };
    ProduccionPage.prototype.ionViewWillEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.pushSvc.getMensajes()];
                    case 1:
                        _a.mensajes = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProduccionPage = tslib_1.__decorate([
        Component({
            selector: 'app-produccion',
            templateUrl: './produccion.page.html',
            styleUrls: ['./produccion.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgZone,
            PushService,
            ModalController])
    ], ProduccionPage);
    return ProduccionPage;
}());
export { ProduccionPage };
//# sourceMappingURL=produccion.page.js.map
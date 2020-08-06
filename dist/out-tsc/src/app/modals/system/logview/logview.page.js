import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
var LogviewPage = /** @class */ (function () {
    function LogviewPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    LogviewPage.prototype.ngOnInit = function () {
    };
    LogviewPage.prototype.salirSinArgumentos = function () {
        this.modalCtrl.dismiss();
    };
    LogviewPage.prototype.salirConArgumentos = function () {
        this.modalCtrl.dismiss({
            nombre: 'data',
            pais: '2222'
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LogviewPage.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LogviewPage.prototype, "mensaje", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LogviewPage.prototype, "tipoError", void 0);
    LogviewPage = tslib_1.__decorate([
        Component({
            selector: 'app-logview',
            templateUrl: './logview.page.html',
            styleUrls: ['./logview.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], LogviewPage);
    return LogviewPage;
}());
export { LogviewPage };
//# sourceMappingURL=logview.page.js.map
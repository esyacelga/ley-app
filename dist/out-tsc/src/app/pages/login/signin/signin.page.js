import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/seguridad/usuario.service';
import { Router } from '@angular/router';
import { DURATION_TOAST } from '../../../config/config';
import { ToastController } from '@ionic/angular';
var SigninPage = /** @class */ (function () {
    function SigninPage(usuarioService, router, notify) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.notify = notify;
    }
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.verifyUser = function (parametro) {
        var _this = this;
        var data = '{"idUsuarioApp":"5","correo":null,"clave":"seya1922"}';
        var test = JSON.parse(data);
        this.usuarioService.verificarUsuario(parametro).then(function (respuesta) {
            if (respuesta) {
                _this.router.navigate(['/password', respuesta.idUsuarioApp]);
            }
            else {
                _this.presentToast('El usuario no existe', 'warning');
            }
        });
    };
    SigninPage.prototype.presentToast = function (mensaje, color) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notify.create({
                            message: mensaje,
                            duration: DURATION_TOAST,
                            color: color
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninPage = tslib_1.__decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.page.html',
            styleUrls: ['./signin.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService, Router, ToastController])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.page.js.map
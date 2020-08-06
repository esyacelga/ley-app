import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/seguridad/usuario.service';
import { DURATION_TOAST } from '../../../config/config';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoginStorageService } from '../../../services/seguridad/login-storage.service';
var PasswordPage = /** @class */ (function () {
    function PasswordPage(activateRoute, usuarioSvc, router, platform, storage, loginStorageSvc, notify) {
        this.activateRoute = activateRoute;
        this.usuarioSvc = usuarioSvc;
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.loginStorageSvc = loginStorageSvc;
        this.notify = notify;
        this.user = null;
    }
    PasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.usuarioSvc.obtenerUsuarioPorId(params.id).then(function (respuesta) {
                _this.user = respuesta;
            });
        });
    };
    PasswordPage.prototype.verifyUser = function (parameter) {
        if (this.user.clave === parameter) {
            this.usuarioSvc.setAuthenticated(true);
            console.log('Usuario Obtenido');
            console.log(JSON.stringify(this.user));
            this.usuarioSvc.setUsuario(this.user);
            this.loginStorageSvc.guardarStorage(this.user);
            this.router.navigate(['/tabs']);
        }
        else {
            this.usuarioSvc.setAuthenticated(false);
            this.presentToast('La contraseña es incorrecta, por favor vuelva a ingresarla', 'warning');
        }
    };
    PasswordPage.prototype.presentToast = function (mensaje, color) {
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
    PasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-password',
            templateUrl: './password.page.html',
            styleUrls: ['./password.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            UsuarioService,
            Router,
            Platform,
            Storage,
            LoginStorageService,
            ToastController])
    ], PasswordPage);
    return PasswordPage;
}());
export { PasswordPage };
//# sourceMappingURL=password.page.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/seguridad/usuario.service';
import { LoginStorageService } from '../../../services/seguridad/login-storage.service';
import { PushService } from '../../../services/commons/push.service';
import { NavController } from '@ionic/angular';
var ConfiguracionPage = /** @class */ (function () {
    function ConfiguracionPage(usuarioSvc, loginStorage, navCtrl, pushSvc) {
        this.usuarioSvc = usuarioSvc;
        this.loginStorage = loginStorage;
        this.navCtrl = navCtrl;
        this.pushSvc = pushSvc;
        this.lstServidores = [];
    }
    ConfiguracionPage.prototype.guardarConfiguracion = function (lstUsuarioServidor) {
        this.usuarioSvc.guardarConfiguracion(lstUsuarioServidor);
    };
    ConfiguracionPage.prototype.cargarUsuario = function (idUsuarioApp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioSvc.obtenerServidoresPorUsuario(idUsuarioApp)];
                    case 1:
                        data = _a.sent();
                        this.lstServidores = data;
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracionPage.prototype.cerrarSecion = function () {
        this.pushSvc.eliminarVariables();
        this.navCtrl.navigateRoot('signin');
    };
    ConfiguracionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loginStorage.cargarUsuarioStorage().then(function (response) {
            // @ts-ignore
            _this.cargarUsuario(response.idUsuarioApp);
            /*  this.usuarioSvc.obtenerServidoresPorUsuario(response.idUsuarioApp).then((data, error) => {
                  this.lstServidores = data;
              }, error => {
                  console.log(error);
              });*/
        }, function (reason) {
            console.log(reason);
        });
    };
    ConfiguracionPage = tslib_1.__decorate([
        Component({
            selector: 'app-configuracion',
            templateUrl: './configuracion.page.html',
            styleUrls: ['./configuracion.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService,
            LoginStorageService, NavController,
            PushService])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());
export { ConfiguracionPage };
//# sourceMappingURL=configuracion.page.js.map
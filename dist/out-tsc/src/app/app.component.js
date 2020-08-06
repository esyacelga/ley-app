import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginStorageService } from './services/seguridad/login-storage.service';
import { UsuarioService } from './services/seguridad/usuario.service';
import { UbicacionProviderService } from './services/commons/ubicacion-provider.service';
import { PushService } from './services/commons/push.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(splashScreen, statusBar, navCtrl, ubicacionSvc, platform, usuarioSvc, pushSvc, loginStorage) {
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.ubicacionSvc = ubicacionSvc;
        this.platform = platform;
        this.usuarioSvc = usuarioSvc;
        this.pushSvc = pushSvc;
        this.loginStorage = loginStorage;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loginStorage.cargarUsuarioStorage().then(function (response) {
                // @ts-ignore
                if (response && response.clave) {
                    _this.usuarioSvc.setAuthenticated(true);
                    _this.navCtrl.navigateRoot('tabs');
                }
                else {
                    _this.navCtrl.navigateRoot('signin');
                }
                if (_this.platform.is('cordova')) {
                    _this.pushSvc.configuracionInicial();
                }
                _this.statusBar.styleDefault();
                _this.ubicacionSvc.iniciarGeolocalicacion();
                _this.splashScreen.hide();
            }, function (reason) {
                _this.navCtrl.navigateRoot('signin');
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [SplashScreen,
            StatusBar,
            NavController,
            UbicacionProviderService,
            Platform,
            UsuarioService,
            PushService,
            LoginStorageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
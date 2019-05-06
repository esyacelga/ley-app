import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LoginStorageService} from './services/seguridad/login-storage.service';
import {UsuarioService} from './services/seguridad/usuario.service';
import {UbicacionProviderService} from './services/commons/ubicacion-provider.service';
import {PushService} from './services/commons/push.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        public ubicacionSvc: UbicacionProviderService,
        private platform: Platform,
        private usuarioSvc: UsuarioService,
        private pushSvc: PushService,
        private loginStorage: LoginStorageService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {

            this.loginStorage.cargarUsuarioStorage().then(response => {
                // @ts-ignore
                if (response && response.clave) {
                    this.usuarioSvc.setAuthenticated(true);
                    this.navCtrl.navigateRoot('tabs');
                } else {
                    this.navCtrl.navigateRoot('signin');
                }
                if (this.platform.is('cordova')) {
                    this.pushSvc.configuracionInicial();
                }
                this.statusBar.styleDefault();
                this.ubicacionSvc.iniciarGeolocalicacion();
                this.splashScreen.hide();
            }, reason => {
                this.navCtrl.navigateRoot('signin');
            });

        });
    }

}

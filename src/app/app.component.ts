import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LoginStorageService} from './services/seguridad/login-storage.service';
import {UsuarioService} from './services/seguridad/usuario.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        private platform: Platform,
        private usuarioSvc: UsuarioService,
        private loginStorage: LoginStorageService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {

            this.loginStorage.cargarStorage().then(response => {
                // @ts-ignore
                if (response && response.clave) {
                    this.usuarioSvc.setAuthenticated(true);
                    this.navCtrl.navigateRoot('home');
                } else {
                    this.navCtrl.navigateRoot('signin');
                }
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            }, reason => {
                this.navCtrl.navigateRoot('signin');
            });

        });
    }

}

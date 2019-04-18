import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {UsuarioApp} from '../../../../classes/UsuarioApp';
import {DURATION_TOAST} from '../../../config/config';
import {Platform, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {LoginStorageService} from '../../../services/seguridad/login-storage.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.page.html',
    styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
    user: UsuarioApp = null;
    parametro: string;

    constructor(private activateRoute: ActivatedRoute,
                private usuarioSvc: UsuarioService,
                private router: Router,
                private platform: Platform,
                private storage: Storage,
                private loginStorageSvc: LoginStorageService,
                private notify: ToastController) {

    }

    ngOnInit() {
        this.activateRoute.params.subscribe(params => {
            this.usuarioSvc.obtenerUsuarioPorId(params.id).then(respuesta => {
                this.user = respuesta;
            });
        });
    }

    verifyUser(parameter) {
        if (this.user.clave === parameter) {
            this.usuarioSvc.setAuthenticated(true);
            this.usuarioSvc.setUsuario(this.user);
            this.loginStorageSvc.guardarStorage(this.user);
            this.router.navigate(['/home']);
        } else {
            this.usuarioSvc.setAuthenticated(false);
            this.presentToast('La contraseña es incorrecta, por favor vuelva a ingresarla', 'warning');
        }
    }


    private async presentToast(mensaje, color) {
        const toast = await this.notify.create({
            message: mensaje,
            duration: DURATION_TOAST,
            color: color
        });
        toast.present();
    }

}

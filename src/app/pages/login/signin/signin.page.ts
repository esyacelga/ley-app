import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {Router} from '@angular/router';
import {DURATION_TOAST} from '../../../config/config';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
    parametro: string;

    constructor(private usuarioService: UsuarioService, private router: Router, private notify: ToastController) {
    }

    ngOnInit() {
    }

    verifyUser(parametro) {
        this.usuarioService.verificarUsuario(parametro).then(respuesta => {
            if (respuesta) {
                this.router.navigate(['/password', respuesta.idUsuarioApp]);
            } else {
                this.presentToast('El usuario no existe', 'warning');
            }
        });
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

import {Component, OnInit} from '@angular/core';
import {UsuarioAppp} from '../../../../classes/UsuarioApp';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    usuarioApp: UsuarioAppp = new UsuarioAppp();

    constructor(public usuarioService: UsuarioService, private notify: ToastController, public loadingController: LoadingController) {
    }

    registerNewUser(usuario: UsuarioAppp) {
        //this.presentLoading();
        this.usuarioService.registrarUsuario(this.usuarioApp);

    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Hellooo',
            duration: 2000
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }

    ngOnInit() {
    }

}

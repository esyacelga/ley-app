import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {LoginStorageService} from '../../../services/seguridad/login-storage.service';
import {UsuarioServidor} from '../../../../classes/UsuarioServidor';
import {PushService} from '../../../services/commons/push.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-configuracion',
    templateUrl: './configuracion.page.html',
    styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
    lstServidores: Array<UsuarioServidor> = [];

    constructor(private usuarioSvc: UsuarioService,
                private loginStorage: LoginStorageService, private navCtrl: NavController,
                public pushSvc: PushService) {
    }


    guardarConfiguracion(lstUsuarioServidor: Array<UsuarioServidor>) {
        this.usuarioSvc.guardarConfiguracion(lstUsuarioServidor);
    }

    async cargarUsuario(idUsuarioApp) {
        const data = await this.usuarioSvc.obtenerServidoresPorUsuario(idUsuarioApp);
        this.lstServidores = data;
    }

    cerrarSecion() {
        this.pushSvc.eliminarVariables();
        this.navCtrl.navigateRoot('signin');
    }


    ngOnInit() {
        this.loginStorage.cargarUsuarioStorage().then(response => {
            // @ts-ignore
            this.cargarUsuario(response.idUsuarioApp);
            /*  this.usuarioSvc.obtenerServidoresPorUsuario(response.idUsuarioApp).then((data, error) => {
                  this.lstServidores = data;
              }, error => {
                  console.log(error);
              });*/
        }, reason => {
            console.log(reason);
        });

    }

}

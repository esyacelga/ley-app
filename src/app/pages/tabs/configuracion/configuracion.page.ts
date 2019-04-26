import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {LoginStorageService} from '../../../services/seguridad/login-storage.service';

@Component({
    selector: 'app-configuracion',
    templateUrl: './configuracion.page.html',
    styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
    lstServidores: any[];

    constructor(private usuarioSvc: UsuarioService, private loginStorage: LoginStorageService) {
    }

    ngOnInit() {
        this.loginStorage.cargarUsuarioStorage().then(response => {
            // @ts-ignore
            this.usuarioSvc.obtenerServidoresPorUsuario(response.idUsuarioApp).then((data, error) => {
                this.lstServidores = data;
                console.log(this.lstServidores);
            }, error => {
                console.log(error);
            });
        }, reason => {
            console.log(reason);
        });

    }

}

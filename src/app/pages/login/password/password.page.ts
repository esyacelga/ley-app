import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {UsuarioAppp} from '../../../../classes/UsuarioApp';

@Component({
    selector: 'app-password',
    templateUrl: './password.page.html',
    styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
    user: UsuarioAppp = null;
    parametro: string;

    constructor(private activateRoute: ActivatedRoute, private usuarioSvc: UsuarioService) {

    }

    ngOnInit() {
        this.activateRoute.params.subscribe(params => {
            this.usuarioSvc.obtenerUsuarioPorId(params.id).then(respuesta => {
                this.user = respuesta;
                console.log(this.user);
            });
        });
    }

}

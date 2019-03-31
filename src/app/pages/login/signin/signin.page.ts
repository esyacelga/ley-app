import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../../services/seguridad/usuario.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
    parametro: string;

    constructor(private usuarioService: UsuarioService) {
    }

    ngOnInit() {
    }

    verifyUser(parametro) {
        this.usuarioService.verificarUsuario(parametro).then(respuesta => {
            console.log(respuesta);
        });
    }

}

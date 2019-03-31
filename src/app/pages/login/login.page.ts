import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../services/seguridad/usuario.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private usuarioService: UsuarioService) {
    }

    ngOnInit() {
    }

    verifyUser(parametro) {
        this.usuarioService.verificarUsuario(parametro);
    }

}

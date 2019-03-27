import {Component, OnInit} from '@angular/core';
import {UsuarioAppp} from '../../../../classes/UsuarioApp';
import {UsuarioService} from '../../../services/seguridad/usuario.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    usuarioApp: UsuarioAppp = new UsuarioAppp();

    constructor(public usuarioService: UsuarioService) {
    }

    registerNewUser(usuario: UsuarioAppp) {
        this.usuarioService.registrarUsuario(this.usuarioApp);
    }

    ngOnInit() {

    }

}

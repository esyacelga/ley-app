import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

    constructor(private activateRoute: ActivatedRoute, private usuarioSvc: UsuarioService, private router: Router) {

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
            this.router.navigate(['/home']);
        } else {
            this.usuarioSvc.setAuthenticated(false);
            this.router.navigate(['/home']);
        }
    }

}

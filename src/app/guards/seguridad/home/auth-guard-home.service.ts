import {Injectable} from '@angular/core';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardHomeService implements CanActivate {

    constructor(private auth: UsuarioService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isAuthenticated()) {
            return true;
        } else {
            return false;
        }
    }
}

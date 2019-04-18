import {Injectable} from '@angular/core';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {PushService} from '../../../services/commons/push.service';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardHomeService implements CanActivate {

    constructor(private auth: UsuarioService, private pushSvc: PushService, private platform: Platform) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isAuthenticated()) {
            //Valida que al aplicacion no permita, iniciarlizar las notificaciones cuando este
            //se encuetre en modo browser
            if (this.platform.is('cordova')) {
                this.pushSvc.configuracionInicial();
            }
            return true;
        } else {
            return false;
        }
    }
}

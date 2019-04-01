import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {UsuarioService} from './usuario.service';
import {UsuarioAppp} from '../../../classes/UsuarioApp';

@Injectable({
    providedIn: 'root'
})
export class LoginStorageService {

    user: UsuarioAppp;

    constructor(private storage: Storage, private platform: Platform, private usuarioSvc: UsuarioService) {
    }

    cargarStorage() {
        if (this.platform.is('cordova')) {
            this.storage.set('usuario', this.usuarioSvc.usuario);
        } else {
            if (localStorage.getItem('usuario')) {
                this.user = JSON.parse(localStorage.getItem('usuario'));
            }

        }

    }

    guardarStorage(usuario: UsuarioAppp) {
        if (this.platform.is('cordova')) {
            this.storage.set('usuario', this.usuarioSvc.usuario);
        } else {
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }
    }
}

import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {UsuarioService} from './usuario.service';
import {UsuarioAppp} from '../../../classes/UsuarioApp';
import {UtilsService} from '../commons/utils.service';

@Injectable({
    providedIn: 'root'
})
export class LoginStorageService {

    user: UsuarioAppp;

    constructor(private storage: Storage, private platform: Platform, private usuarioSvc: UsuarioService, private utilSvc: UtilsService) {
    }

    cargarStorage() {
        const promesa = new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                console.log('Inicializando storage');
                console.log('Storage inicializado ');
                this.storage.get('usuario').then((val) => {
                    let dataUser = null;
                    try {
                        dataUser = JSON.parse(JSON.stringify(val));
                    } catch (error) {
                        console.error(error);
                        console.log(error);
                    }
                    resolve(dataUser);
                }, reason => {
                    console.log(this.user);
                });

            } else {
                if (localStorage.getItem('usuario')) {
                    this.user = JSON.parse(localStorage.getItem('usuario'));
                }
                resolve(this.user);
            }
        });
        return promesa;
    }

    guardarStorage(usuario: UsuarioAppp) {
        if (this.platform.is('cordova')) {
            // const obj = this.utilSvc.toXML(usuario);
            this.storage.set('usuario', usuario);
        } else {
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }
    }
}

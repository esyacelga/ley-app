import {Injectable} from '@angular/core';
import {UtilsService} from '../commons/utils.service';
import {UsuarioAppp} from '../../../classes/UsuarioApp';
import {ToastController} from '@ionic/angular';
import {PROC_XML_REGISTRAR_USUARIO} from '../../config/config';
import {LoadingService} from '../commons/loading.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {


    constructor(private utilService: UtilsService, private notify: ToastController, protected loading: LoadingService) {
    }


    public registrarUsuario = function (usuario: UsuarioAppp) {
        const promesa = new Promise((resolve, reject) => {
            this.loading.present('messagesService.loadMessagesOverview', 'Loading messages...');

            this.utilService.procEjecucionGenercia(usuario, PROC_XML_REGISTRAR_USUARIO).subscribe(resp => {
                this.loading.dismiss('messagesService.loadMessagesOverview');
                this.presentToast('Aviso Ejecutado');
                resolve();
            }, error => {
                this.loading.dismiss('messagesService.loadMessagesOverview');
                this.presentToast('Error aviso Ejecutado');
                reject(error);
            });

        });


    };


    async presentToast(mensaje) {
        const toast = await this.notify.create({
            message: mensaje,
            duration: 2000
        });
        toast.present();
    }


}


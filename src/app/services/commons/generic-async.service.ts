import {Injectable} from '@angular/core';
import {UtilsService} from './utils.service';
import {ToastController} from '@ionic/angular';
import {LoadingService} from './loading.service';
import {
    COLOR_TOAST_ERROR,
    COLOR_TOAST_PRIMARY,
    DURATION_TOAST,
    ERROR_MESSAGE,
    LOAD_MESSAGE,
    PROC_XML_REGISTRAR_USUARIO,
    SUCCESS_MESSAGE
} from '../../config/config';
import {NotiFyMessage} from '../../../classes/NotiFyMessage';

@Injectable({
    providedIn: 'root'
})
export class GenericAsyncService {

    constructor(private utilService: UtilsService, private notify: ToastController, protected loading: LoadingService) {
    }


    public ejecucionGenerica = function (genericObject: any, storeProcedure: string, messages?: NotiFyMessage) {
        const promesa = new Promise((resolve, reject) => {
            if (messages === undefined) {
                messages = new NotiFyMessage();
            }
            if (messages.successMessaje === undefined) {
                messages.successMessaje = SUCCESS_MESSAGE;
            }
            if (messages.errorMessage === undefined) {
                messages.errorMessage = ERROR_MESSAGE;
            }
            if (messages.loadingMessage === undefined) {
                messages.loadingMessage = LOAD_MESSAGE;
            }
            if (messages.toastColor === undefined) {
                messages.toastColor = COLOR_TOAST_PRIMARY;
            }
            this.loading.present('messagesService.loadMessagesOverview', messages.loadingMessage);
            this.utilService.procEjecucionGenercia(genericObject, PROC_XML_REGISTRAR_USUARIO).subscribe(resp => {
                this.loading.dismiss('messagesService.loadMessagesOverview');
                this.presentToast(messages.successMessaje, messages.toastColor);
                resolve(resp);
            }, error => {
                this.loading.dismiss('messagesService.loadMessagesOverview');
                this.presentToast(messages.errorMessage, COLOR_TOAST_ERROR);
                reject(error);
            });
        });

        return promesa;
    };


    private async presentToast(mensaje, color) {
        const toast = await this.notify.create({
            message: mensaje,
            duration: DURATION_TOAST,
            color: color
        });
        toast.present();
    }
}

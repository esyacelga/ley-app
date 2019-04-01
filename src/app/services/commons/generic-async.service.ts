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
    PROC_GET_XML_GENERICO,
    PROC_XML_REST_GENERICO,
    SUCCESS_MESSAGE
} from '../../config/config';
import {RequestOptions} from '../../../classes/RequestOptions';

@Injectable({
    providedIn: 'root'
})
export class GenericAsyncService {

    constructor(private utilService: UtilsService, private notify: ToastController, protected loading: LoadingService) {
    }


    public async getGenericObjects  (genericObject: any, storeProcedure: string, options?: RequestOptions) {
        if (!options) {
            options = new RequestOptions();
        }
        const promesa = new Promise(async (resolve, reject) => {
            if (options.restUrl === undefined) {
                options.restUrl = PROC_GET_XML_GENERICO;
            }

            if (options.successMessaje === undefined) {
                options.successMessaje = SUCCESS_MESSAGE;
            }
            if (options.errorMessage === undefined) {
                options.errorMessage = ERROR_MESSAGE;
            }
            if (options.loadingMessage === undefined) {
                options.loadingMessage = LOAD_MESSAGE;
            }
            if (options.toastColor === undefined) {
                options.toastColor = COLOR_TOAST_PRIMARY;
            }
            await this.loading.present('messagesService.loadMessagesOverview', 'Procesando...');
            this.utilService.procConsultaGenerica(genericObject, storeProcedure, options.restUrl).subscribe(async resp => {
                this.loading.dismiss('messagesService.loadMessagesOverview');
                if (resp.RETURN_VALUE !== 1) {
                    await this.presentToast(resp.AS_MSJ, COLOR_TOAST_ERROR);
                    reject(resp.AS_MSJ);
                } else {
                    let obj = null;
                    if (options.responseType === 1) {
                        obj = this.utilService.entidadDesdeXML(resp.AS_XML);
                    } else {
                        obj = this.utilService.listaDesdeXML(resp.AS_XML);
                    }
                    resolve(obj);
                }
            }, async error => {
                await this.loading.dismiss('messagesService.loadMessagesOverview');
                this.presentToast(options.errorMessage, COLOR_TOAST_ERROR);
                reject(error);
            });
        });
        return promesa;
    }

    public ejecucionGenerica = function (genericObject: any, storeProcedure: string, messages?: RequestOptions) {
        const promesa = new Promise((resolve, reject) => {
            if (!messages) {
                messages = new RequestOptions();
            }
            if (messages.restUrl === undefined) {
                messages.restUrl = PROC_XML_REST_GENERICO;
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
            this.utilService.procEjecucionGenerica(genericObject, storeProcedure, messages.restUrl).subscribe(resp => {
                this.loading.dismiss('messagesService.loadMessagesOverview');
                this.presentToast(messages.successMessaje, messages.toastColor);
                if (resp.RETURN_VALUE !== 1) {
                    this.presentToast(resp.AS_MSJ, COLOR_TOAST_ERROR);
                    reject(resp.AS_MSJ);
                } else {
                    let obj = null;
                    if (messages.responseType === 1) {
                        obj = this.utilService.entidadDesdeXML(resp.AS_XML);
                    } else {
                        obj = this.utilService.listaDesdeXML(resp.AS_XML);
                    }
                    resolve(obj);
                }
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

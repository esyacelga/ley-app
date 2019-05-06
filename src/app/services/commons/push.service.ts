import {EventEmitter, Injectable} from '@angular/core';
import {OneSignal, OSNotification, OSNotificationPayload} from '@ionic-native/onesignal/ngx';
import {Storage} from '@ionic/storage';
import {UsuarioService} from '../seguridad/usuario.service';


@Injectable({
    providedIn: 'root'
})
export class PushService {

    mensajes: OSNotificationPayload[] = [];

    pushLitener = new EventEmitter<OSNotificationPayload>(

    );
    userId: string;

    constructor(private oneSignal: OneSignal, private storage: Storage, private usrSvc: UsuarioService) {
        this.cargarMensajes();
    }

    async getMensajes() {
        await this.cargarMensajes();
        return [...this.mensajes];
    }

    configuracionInicial() {
        this.oneSignal.startInit('582185ec-15b2-44f7-9ecd-06021656c35a', '377548776950');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

        this.oneSignal.handleNotificationReceived().subscribe((noti) => {
            // do something when notification is received
            console.log('Notificacion Recebida');
            this.notificacionRecibida(noti);
        });

        this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
            // do something when a notification is opened
            await this.notificacionRecibida(noti.notification);
        });

        this.oneSignal.getIds().then(info => {
            this.userId = info.userId;
            console.log('USERID-GENERADO');
            console.log(this.usrSvc.playerId);
            this.usrSvc.playerId = info.userId;

        });

        this.oneSignal.endInit();
    }

    async notificacionRecibida(noti: OSNotification) {
        await this.cargarMensajes();
        const payload = noti.payload;
        const existePush = this.mensajes.find(mensaje =>
            mensaje.notificationID === payload.notificationID);

        if (existePush) {
            return;
        }
        this.mensajes.unshift(payload);
        this.pushLitener.emit(payload);
        console.log('NOTIFICACION A GUARDAR');
        await this.guardarMensajes(this.mensajes);

    }


    guardarMensajes(lstObj: any) {
        this.storage.set('mensajes', lstObj);
    }

    async borrarMensajes(key: string) {
        await this.storage.remove(key);
        this.mensajes = [];
        this.guardarMensajes(this.mensajes);
    }

    eliminarVariables() {
        this.storage.clear();
    }

    async cargarMensajes() {
        this.mensajes = await this.storage.get('mensajes') || [];
        return this.mensajes;
    }


}

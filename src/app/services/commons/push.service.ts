import {EventEmitter, Injectable} from '@angular/core';
import {OneSignal, OSNotification, OSNotificationPayload} from '@ionic-native/onesignal/ngx';
import {Storage} from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})
export class PushService {

    mensajes: OSNotificationPayload[] = [];

    pushLitener = new EventEmitter<OSNotificationPayload>(

    );


    constructor(private oneSignal: OneSignal, private storage: Storage) {
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
            console.log('Notificacion recivida', noti);
            this.notificacionRecibida(noti);
        });

        this.oneSignal.handleNotificationOpened().subscribe((noti) => {
            // do something when a notification is opened
            console.log('Notificacion abierta', noti);
        });

        this.oneSignal.endInit();
    }

    async notificacionRecibida(noti: OSNotification) {
        await this.cargarMensajes();
        const payload = noti.payload;
        const existePush = this.mensajes.find(mensaje =>
            mensaje.notificationID === payload.notificationID);

        console.log('*******');
        if (existePush) {
            return;
        }
        this.mensajes.unshift(payload);
        console.log('init print notificacionRecibida**');
        console.log(JSON.stringify(this.mensajes));
        console.log(' fin print notificacionRecibida');
        this.pushLitener.emit(payload);
        this.guardarMensajes();

    }


    guardarMensajes() {
        this.storage.set('mensajes', this.mensajes);
    }

    async cargarMensajes() {
        console.log('Cargando los mensajes desde la aplicacion');
        this.mensajes = await this.storage.get('mensajes') || [];
        console.log(JSON.stringify(this.mensajes));
    }


}

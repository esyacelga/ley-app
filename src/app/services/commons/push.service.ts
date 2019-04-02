import {Injectable} from '@angular/core';
import {OneSignal} from '@ionic-native/onesignal/ngx';

@Injectable({
    providedIn: 'root'
})
export class PushService {

    mensajes: any[] = [
        {
            title: 'Titulo de la push',
            body: 'Este es el body de la push',
            date: new Date()
        }
    ];

    constructor(private oneSignal: OneSignal) {

    }

    configuracionInicial() {
        this.oneSignal.startInit('582185ec-15b2-44f7-9ecd-06021656c35a', '377548776950');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe((noti) => {
            // do something when notification is received
            console.log('Notificacion recivida', noti);
        });

        this.oneSignal.handleNotificationOpened().subscribe((noti) => {
            // do something when a notification is opened
            console.log('Notificacion abierta', noti);
        });

        this.oneSignal.endInit();
    }
}

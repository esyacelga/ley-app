import {ApplicationRef, Component, OnInit} from '@angular/core';
import {UbicacionProviderService} from '../services/commons/ubicacion-provider.service';
import {PushService} from '../services/commons/push.service';
import {OSNotificationPayload} from '@ionic-native/onesignal';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    mensajes: OSNotificationPayload[] = [];

    constructor(public ubicacionSvc: UbicacionProviderService, public pushSvc: PushService, private appli: ApplicationRef) {
        this.ubicacionSvc.iniciarGeolocalicacion();
    }

    ngOnInit(): void {
        this.pushSvc.pushLitener.subscribe(noti => {
            this.mensajes.unshift(noti);
            this.appli.tick();
        });
    }

    async ionViewWillEnter() {
        console.log('Will-Enter -cargar mensajes');
        this.mensajes = await this.pushSvc.getMensajes();
    }


}

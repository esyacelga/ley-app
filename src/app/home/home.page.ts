import {ApplicationRef, Component, OnInit} from '@angular/core';
import {UbicacionProviderService} from '../services/commons/ubicacion-provider.service';
import {PushService} from '../services/commons/push.service';
import {OSNotificationPayload} from '@ionic-native/onesignal';
import {ModalController} from '@ionic/angular';
import {RegisterPage} from '../pages/login/register/register.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    mensajes: OSNotificationPayload[] = [];

    constructor(public ubicacionSvc: UbicacionProviderService,
                public pushSvc: PushService,
                private appli: ApplicationRef,
                public modalController: ModalController) {
        this.ubicacionSvc.iniciarGeolocalicacion();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: RegisterPage,
            componentProps: { value: 123 }
        });
        return await modal.present();
    }

    ngOnInit(): void {
        this.pushSvc.pushLitener.subscribe(noti => {
            console.log('Cargando Listener');
            this.mensajes.unshift(noti);
            this.appli.tick();
        });
    }

    async ionViewWillEnter() {
        this.mensajes = await this.pushSvc.getMensajes();
    }


}

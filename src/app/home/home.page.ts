import {Component, NgZone, OnInit} from '@angular/core';
import {UbicacionProviderService} from '../services/commons/ubicacion-provider.service';
import {PushService} from '../services/commons/push.service';
import {OSNotificationPayload} from '@ionic-native/onesignal';
import {ModalController} from '@ionic/angular';
import {LogviewPage} from '../modals/system/logview/logview.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    mensajes: OSNotificationPayload[] = [];


    constructor(private zone: NgZone,
                public ubicacionSvc: UbicacionProviderService,
                public pushSvc: PushService,
                public modalController: ModalController) {
        this.ubicacionSvc.iniciarGeolocalicacion();
    }

    borrarMensajes() {
        this.pushSvc.borrarMensajes('mensajes');
        this.ionViewWillEnter();
    }

    borrarMensaje(index: number) {
        this.mensajes.splice(index, 1);
        this.pushSvc.guardarMensajes(this.mensajes);
    }

    verMensaje(titulo: string, tipo: string, mensajeError: string) {
        this.presentModal(titulo, tipo, mensajeError);
    }

    async presentModal(titulo: string, tipo: string, mensajeError: string) {
        const modal = await this.modalController.create({
            component: LogviewPage,
            componentProps: {title: titulo, tipoError: tipo, mensaje: mensajeError}
        });
        await modal.present();
        const {data} = await modal.onDidDismiss();
    }

    ngOnInit(): void {
        this.pushSvc.pushLitener.subscribe(noti => {
            this.zone.run(() => {
                this.mensajes.unshift(noti);
            });
        });
    }

    async ionViewWillEnter() {
        this.mensajes = await this.pushSvc.getMensajes();

    }


}

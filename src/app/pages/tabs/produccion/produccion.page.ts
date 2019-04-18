import {Component, NgZone, OnInit} from '@angular/core';
import {OSNotificationPayload} from '@ionic-native/onesignal';
import {UbicacionProviderService} from '../../../services/commons/ubicacion-provider.service';
import {PushService} from '../../../services/commons/push.service';
import {ModalController} from '@ionic/angular';
import {LogviewPage} from '../../../modals/system/logview/logview.page';

@Component({
    selector: 'app-produccion',
    templateUrl: './produccion.page.html',
    styleUrls: ['./produccion.page.scss'],
})
export class ProduccionPage implements OnInit {

    mensajes: OSNotificationPayload[] = [];


    constructor(private zone: NgZone,
                public ubicacionSvc: UbicacionProviderService,
                public pushSvc: PushService,
                public modalController: ModalController) {
        this.ubicacionSvc.iniciarGeolocalicacion();
    }


    borrarVariablres() {
        this.pushSvc.eliminarVariables();
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

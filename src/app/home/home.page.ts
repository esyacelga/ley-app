import {ApplicationRef, Component, OnInit} from '@angular/core';
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


    constructor(public ubicacionSvc: UbicacionProviderService,
                public pushSvc: PushService,
                private appli: ApplicationRef,
                public modalController: ModalController) {
        this.ubicacionSvc.iniciarGeolocalicacion();
    }

    borrarMensajes() {
        this.pushSvc.borrarMensajes('mensajes');
    }

    borrarMensaje(index: number) {
        console.log(index);
        console.log('Numero de items antes: ', this.mensajes.length);
        this.mensajes.splice(index, 1);
        console.log('Numero de items despues: ', this.mensajes.length);
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
        console.log('retorno', data);
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

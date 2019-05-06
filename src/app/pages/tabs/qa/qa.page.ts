import {Component, NgZone, OnInit} from '@angular/core';
import {PushService} from '../../../services/commons/push.service';
import {ModalController} from '@ionic/angular';
import {LogviewPage} from '../../../modals/system/logview/logview.page';

@Component({
    selector: 'app-qa',
    templateUrl: './qa.page.html',
    styleUrls: ['./qa.page.scss'],
})
export class QAPage implements OnInit {

    mensajes: any[] = [];
    customFilter: any = {additionalData: {ambiente: 'QA'}};


    constructor(private zone: NgZone,
                public pushSvc: PushService,
                public modalController: ModalController) {
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
                console.log('Mensaje del subscriptor produccion..');
                console.log(JSON.stringify(noti));
                console.log('data: ' + JSON.stringify(this.mensajes));
            });
        });
    }

    async ionViewWillEnter() {
        this.mensajes = await this.pushSvc.getMensajes();

    }


}

import {Component} from '@angular/core';
import {UbicacionProviderService} from '../services/commons/ubicacion-provider.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public ubicacionSvc: UbicacionProviderService) {
        this.ubicacionSvc.iniciarGeolocalicacion();
    }


}

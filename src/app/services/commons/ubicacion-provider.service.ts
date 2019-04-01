import {Injectable} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Injectable({
    providedIn: 'root'
})
export class UbicacionProviderService {

    constructor(private geolocation: Geolocation) {
    }

    public iniciarGeolocalicacion() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp.coords);
            const watch = this.geolocation.watchPosition();
            watch.subscribe((data) => {
                // data can be a set of coordinates, or an error (if an error occurred).
                // data.coords.latitude
                // data.coords.longitude
                console.log('Watch: ', data);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }


    /*let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
      */
}

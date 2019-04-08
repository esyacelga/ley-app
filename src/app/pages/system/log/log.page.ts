import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-log',
    templateUrl: './log.page.html',
    styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {

    mensaje = null;

    constructor(private activR: ActivatedRoute) {
    }

    ngOnInit() {
        this.mensaje = this.activR.snapshot.paramMap.get('mensaje');
    }

}

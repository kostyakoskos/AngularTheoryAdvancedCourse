import { Injectable } from "@angular/core";
import { LogService } from "../service/log.service";


@Injectable()
export class AppCounterService {

    constructor(private logService: LogService) {

    }

    counter = 0;

    increase() {
        this.logService.log('increase counter');
        this.counter++;
    }
    decrease() {
        this.logService.log('decrease counter');
        this.counter--;
    }
}
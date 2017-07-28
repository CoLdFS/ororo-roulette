import {Component} from '@angular/core';
import {ALLSHOWS} from './ororo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Ороро рулетка';
    subtitle = 'Если выбирать сериалы самому уже слишком тяжело';
    version = 'Анечка edition';
    yearFrom = 1700;
    yearTo = 2018;
    shows = [];
    selectedJanr = [];

    constructor() {
        this.spin();
    }

    static shuffle(a): any {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    filterShows(): any {
        return ALLSHOWS.filter(function (item) {
            if (item.year > this.yearTo || item.year < this.yearFrom) {
                return false;
            }
            if (this.selectedJanr.length === 0) {
                return true;
            }
            for (let entry of this.selectedJanr) {
                if (item.info.indexOf(entry) !== -1) {
                    return true;
                }
            }
            return false;
        }.bind(this));
    }

    spin(): void {
        this.shows = AppComponent.shuffle(this.filterShows()).slice(0, 3);
    }
}

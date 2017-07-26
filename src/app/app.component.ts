import { Component } from '@angular/core';
import {ALLSHOWS} from './ororo';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ороро рулетка';
  subtitle = 'Если выбирать сериалы самому уже слишком тяжело';
  version = 'Анечка edition';
  shows = [];
  selectedJanr = [];


  constructor() {
      this.spin();
  }
  filterShows(): any {
      return ALLSHOWS.filter(function (item) {
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
    const len = 3;
    const filtred = this.filterShows();
    const max = filtred.length;
    this.shows = [];
    if (max === 0) {
        return;
    }
    for (let i = 0; i < len; i++) {
      const index = (Math.floor(Math.random() * (max - 1)));
      this.shows.push(filtred[index]);
    }
  }
}

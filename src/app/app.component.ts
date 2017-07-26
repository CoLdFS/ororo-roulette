import { Component } from '@angular/core';
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
  allshows = ALLSHOWS;
  shows = this.allshows.slice(20, 23);
  spin(): void {
    const len = 3;
    const max = this.allshows.length;
    let index = 0;
    this.shows = [];
    for (let i = 0; i < len; i++) {
      index = (Math.floor(Math.random() * (max - 1)));
      this.shows.push(this.allshows[index]);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Minesweep } from './minesweep';

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  game: Minesweep;

  constructor() { }

  ngOnInit() {
    this.game = Minesweep.newBeginersGame();
    debugger
  }

  restart() {
    this.game = Minesweep.newBeginersGame();
  }
}
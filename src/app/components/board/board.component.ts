import { Component, Input } from '@angular/core';
import { Minesweep } from './../main/minesweep';

@Component({
  selector: 'board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  @Input() game: Minesweep;

  constructor() { }

  clickCell(row: number, column: number) {
    this.game.processBeaten({ row, column });
  }

}
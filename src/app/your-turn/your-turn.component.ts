import { Component, Input, OnInit } from '@angular/core';
import { shuffleArray } from '../util/array-function.util';

@Component({
  selector: 'app-your-turn',
  templateUrl: './your-turn.component.html',
  styleUrls: ['./your-turn.component.css']
})
export class YourTurnComponent implements OnInit {

  @Input() started = false;
  @Input() team: string[] = [];
  notes = '';
  teamOutput: any[] = [];

  currentUserIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.team = shuffleArray(this.team);
  }

  onNext() {
    this.teamOutput.push({ name: this.team[this.currentUserIndex], notes: this.notes });
    this.notes = '';
    this.currentUserIndex++;
  }

  public getTeamOutput() {
    return this.teamOutput;
  }

  public done() {
    return this.currentUserIndex > this.team.length - 1;
  }


}

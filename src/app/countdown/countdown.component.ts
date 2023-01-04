import { Component, Input, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() started = false;
  countDown: Subscription | null = null;
  counterTotal = 120;
  counter: number = 120;
  tick = 1000;
  barClass = 'bg-info';

  ngOnInit() {
    this.startCountDown();
  }

  ngOnDestroy() {
    this.destroyCountDown();
  }

  public resetCounter() {
    this.destroyCountDown();
    this.counter = this.counterTotal;
    this.startCountDown();
  }

  private destroyCountDown() {
    this.countDown?.unsubscribe();
    this.countDown = null;
  }

  private startCountDown() {
    this.countDown = timer(0, this.tick)
      .subscribe(() => {
        if (this.counter > 0 && this.started) --this.counter;
        this.barClass = this.getBarClass();
      })
  }

  getPercentageOfTotal() {
    return 100 - ((this.counter / this.counterTotal) * 100);
  }

  getBarClass() {
    if (this.getPercentageOfTotal() < 75) {
      return 'bg-info';
    } else if (this.getPercentageOfTotal() > 75 && this.getPercentageOfTotal() < 90) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }

}

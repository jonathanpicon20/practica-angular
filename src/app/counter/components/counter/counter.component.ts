import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public title: string = 'Bases';
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter = this.counter + 10;
  }
  decreaseBy(value: number): void {
    this.counter = this.counter - 10;
  }
  clearBy(): void {
    this.counter = 0;
  }
}

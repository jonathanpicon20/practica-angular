import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public title: string = 'Bases';
  public counter: number = 100;

  increaseBy(value: number): void {
    this.counter = ++this.counter;
  }
  decreaseBy(value: number): void {
    this.counter -= 1;
  }
  clearBy(): void {
    this.counter = 100;
  }
}

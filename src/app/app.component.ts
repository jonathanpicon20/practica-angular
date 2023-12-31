import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

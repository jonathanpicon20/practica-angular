import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public heroName: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroName.pop();
  }
}

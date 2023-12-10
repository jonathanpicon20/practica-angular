import { Component } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1500,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Broly',
      power: 25000,
    },
  ];
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }
}

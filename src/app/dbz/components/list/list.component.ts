import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  onDeleteId(): void {}
  onDeleteCharacter(index: number): void {
    //TODO: Emitir el Id del Personaje
    console.log({ index });
  }
}

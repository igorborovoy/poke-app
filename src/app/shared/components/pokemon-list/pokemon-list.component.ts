import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Pokemon} from '../../../utils/interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: Pokemon[];
  @Output() del = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDel(): void {
    this.del.emit();
  }
}

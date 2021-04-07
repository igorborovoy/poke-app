import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {Pokemon} from '../../../utils/interfaces/pokemon.interfaces';
import {LocalStorageService} from '../../../utils/services/localstorage.service';
import {CounterService} from '../../../utils/services/counter.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [CounterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent implements OnInit, OnDestroy {

  likes: Observable<number> = this.counterService.counter$;
  isOnFav: boolean;


   @Input() pokemon: Pokemon;
   @Input() fromFav: boolean;
   @Output() del: EventEmitter<any> = new EventEmitter();

  constructor(
    private storageService: LocalStorageService,
    private counterService: CounterService
  ) {  }

  ngOnInit(): void {
    this.isOnFav = this.storageService.getItem(this.pokemon);
  }

  public addToFav(): void {
    this.storageService.setItem(this.pokemon);
    this.isOnFav = !this.isOnFav;
  }

  public delFromFav(): void {
    this.storageService.deleteItem(this.pokemon);
    this.isOnFav = !this.isOnFav;
    this.del.emit();
  }

  public incLikes(): void {
    this.counterService.increment();
  }

  public decLikes(): void {
    this.counterService.decrement();
  }

  ngOnDestroy(): void {
  }
}

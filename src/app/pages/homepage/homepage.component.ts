import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from '../../utils/services/http.service';
import {Pokemon} from '../../utils/interfaces/pokemon.interfaces';
import {mergeMap} from 'rxjs/operators';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {


  public pokemons: Pokemon[] = [];
  isComplited = false;
  progressBarValue = 0;
  searchString = '';

  constructor(private httpService: HttpService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initListeners();
  }

  private initListeners(): void {
    this.httpService.getListOfPokemons()
      .pipe(
        mergeMap( ({url}) => this.httpService.getPokemonInfo(url))
      )
      .subscribe( ({name, sprites: {front_default}}) => {
        this.pokemons = [...this.pokemons, {name, imageUrl: front_default}];
        this.progressBarValue += 100 / 6;
        this.cdr.detectChanges();
      });
  }

  next(): void {
    this.progressBarValue = 0;
    this.pokemons = [];
    this.httpService.offset += 6;
    this.initListeners();
  }
}

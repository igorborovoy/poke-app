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
        this.pokemons.push({name, imageUrl: front_default});
        this.pokemons = [...this.pokemons];
        this.cdr.detectChanges();
      });
  }
}

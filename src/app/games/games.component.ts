import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/models/game';
import { GamesService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  searchForm: FormGroup;
  gameList: Game[] = [];

  constructor(private gamesService: GamesService) {
    this.searchForm = new FormGroup({
      searchGame: new FormControl('', Validators.minLength(1)),
    });
    this.gameList = [];
  }

  ngOnInit(): void {
    this.gamesService.games$.subscribe((games) => this.gameList = games);
    console.log(this.gamesService.games$.forEach(item => console.log(item)))
  }

  searchGame(): void {
    const gameName = this.searchForm.value?.searchGame;
    this.gamesService.getGames(gameName);
    this.gamesService.games$.subscribe((games) => this.gameList = games);
  }
}

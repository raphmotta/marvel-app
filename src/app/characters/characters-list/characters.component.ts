import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/model/character.model';
import { CharactersService, EntityResponseTypeArray } from '../service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: ICharacter[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters(): void {
    this.charactersService.query({
      limit: 30
    }).subscribe((res: EntityResponseTypeArray) => {
      if (res.body) {
        this.characters = res.body.data?.results ?? [];
      }
    });
  }

  getCharacterThumb(c: ICharacter) {
    return c.thumbnail?.path + '.' + c.thumbnail?.extension; 
  }

}

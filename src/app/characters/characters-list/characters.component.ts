import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/model/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: ICharacter[]=[
    {
      id: 1011334,
      name: "3-D Man",
      description: "",
      thumbnail: {
        path:"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg"
      },
    
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
      },
    },
    {
      id: 1011334,
      name: "3-D Man",
      description: "",
      thumbnail: {
        path:"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg"
      },
    
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
      },
    },
    {
      id: 1011334,
      name: "3-D Man",
      description: "",
      thumbnail: {
        path:"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg"
      },
    
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
      },
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
      },
    },
    {
      id: 1011334,
      name: "3-D Man",
      description: "",
      thumbnail: {
        path:"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg"
      },
    
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
      },
    },
    {
      id: 1011334,
      name: "3-D Man",
      description: "",
      thumbnail: {
        path:"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg"
      },
    
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
      },
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
      },
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getCharacterThumb(c: ICharacter) {
    return c.thumbnail?.path + '.' + c.thumbnail?.extension; 
  }

}

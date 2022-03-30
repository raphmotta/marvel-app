import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ICharacter } from 'src/app/model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private ResourceURL = '/api/characters';

  constructor(private http: HttpClient) { }

  /* query(params) {

  } */

  /* get(id: number): HttpResponse<ICharacter> {
    return this.http.get<ICharacter>(this.ResourceURL + '/' + id, { responseType: 'content/json' })
      .pipe(
        map((res: HttpResponse<ICharacter>) => res.body)
      );
  } */

}

import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICharacter, ICharacterList } from 'src/app/model/character.model';

export type EntityResponseType = HttpResponse<ICharacter>;
export type EntityResponseTypeArray = HttpResponse<ICharacterList>;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private resourceUrl = '/api/characters';

  constructor(private http: HttpClient) { }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<ICharacter>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityResponseTypeArray> {
    const options = this.createRequestOption(req);
    return this.http.get<ICharacterList>(this.resourceUrl, { params: options, observe: 'response' });
  }

  createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();
  
    if (req) {
      Object.keys(req).forEach(key => {
        if (key !== 'sort') {
          options = options.set(key, req[key]);
        }
      });
  
      if (req.sort) {
        req.sort.forEach((val: string) => {
          options = options.append('sort', val);
        });
      }
    }
  
    return options;
  };

}

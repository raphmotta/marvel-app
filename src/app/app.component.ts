import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from './model/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'marvel-app';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('/api/characters').subscribe((data: any) => console.log(data)); 
  }
}

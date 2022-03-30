import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters-list/characters.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptorModule } from '../interceptors/app.interceptor.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    CharactersComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [
    CharactersComponent,
    CharactersDetailComponent
  ]
})
export class CharactersModule { }

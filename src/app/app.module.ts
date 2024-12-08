import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchFilterPipe,
    RechercheParNomComponent,
    RechercheParGenreComponent,
    ListeGenresComponent,
    UpdateGenreComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

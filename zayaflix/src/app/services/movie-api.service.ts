import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3';
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNlMzA4MDA5MTM4YzExYmQ1ZWMxNTA4NmY2ODQ4MyIsIm5iZiI6MTYyMzE5OTUzNi41MzksInN1YiI6IjYwYzAwZjMwNWIxMjQwMDA3YTc0N2IyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kEm9KuWOTvqNYEW1r4xFOWQ7g7SbsWupIiMss_L3gvk'
    }
  };

  // Dados para o Banner - Midias em destaque da semana
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }

  // Filmes em Destaque do Dia
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options);
  }

  // Séries em Destaque do Dia
  trendingSerieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options);
  }

  // Filmes de Ação Populares
  popularActionMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options);
  }

  // -------- Área de Detalhes
  // Buscar Detalhes da Midia
  mediaDetails(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}?language=pt-br`, this.options);
  }
  // Buscar os Trailers da Midia
  mediaTrailers(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/videos?language=pt-br`, this.options);
  }
  // Buscar o Elenco da Midia
  mediaCast(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/credits?language=pt-br`, this.options);
  }

  // Buscar os dados do Ator ou Atriz
  personDetails(value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/person/${value}?language=pt-br`, this.options);
  }

  // Pesquisa
  searchMedia(value: any, page: any = 1) : Observable<any> {
    return this.http.get(`${this.baseUrl}/search/multi?query=${value}&language=pt-br&include_adult=false&page=${page}`, this.options);
  }
  
}
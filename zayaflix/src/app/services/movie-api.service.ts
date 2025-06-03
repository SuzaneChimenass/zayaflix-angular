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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjU3N2IxOGRhZWJlNWU2NzhhMmZkY2EzOTVmMGU5MiIsIm5iZiI6MTc0NzcwMDgwNC4wOSwic3ViIjoiNjgyYmNjNDRhNThjNTA5ODUzMmY3ODAzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.GMjj5FF5eP5kd1jRLrF4u4HxB940brkd0MkoKDjvWYU'
    }
  };

  bannerApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }
  trendingMovieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options);
  }

  trendingSerieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options);
  }

  popularActionMovieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options);
  }
  
  //------- Área de Detalhes
  // Buscar Detalhes da Midia
  mediaDetails(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}?language=pt-br`, this.options);
  }

  //Buscar os Trailers da Midia
  mediaTrailers(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}videos?language=pt-br`, this.options);
  }

  //Buscar o Elenco da Midia
  mediaCast(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}credits?language=pt-br`, this.options);
  }
}


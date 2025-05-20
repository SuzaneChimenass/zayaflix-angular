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

}


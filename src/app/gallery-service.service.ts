import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image, Category } from './db-data';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>("http://5e39ca348d7e1300149cd687.mockapi.io/ciklus")
  }

  getImages(id: number):Observable<Image[]>{
    return this.http.get<Image[]>(`http://5e39ca348d7e1300149cd687.mockapi.io/ciklus/${id}/sliki`)
  }

}

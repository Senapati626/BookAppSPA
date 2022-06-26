import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = "http://openlibrary.org/search.json?title=";
  private baseUrlAuthor = "http://openlibrary.org/search/authors.json?q=";
  constructor(private http:HttpClient) { }

  search(data:any){
    return this.http.get<any>(this.baseUrl+data)
  }
  searchAuthor(data:any){
    return this.http.get<any>(this.baseUrlAuthor+data)
  }
}

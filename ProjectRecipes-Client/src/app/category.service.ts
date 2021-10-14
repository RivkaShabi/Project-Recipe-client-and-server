import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Category} from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  GetAllCategory(){
    return this.http.get<any>("https://localhost:44332/api/Category/GetAllCategory");
  }
  constructor(public http: HttpClient) { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  EditRecipe(r:Recipe){
    return this.http.post<any>("https://localhost:44332/api/Recipe/EditRecipe",r);

  }
  GetAllRecipe(){
    return this.http.get<any>("https://localhost:44332/api/Recipe/GetAllRecipe");
  }
  AddRecipe(r:Recipe){
    return this.http.post<any>("https://localhost:44332/api/Recipe/AddRecipe",r);
  }
  SearseRecipe(codeRecipe:number){

    return this.http.post<any>("https://localhost:44332/api/Recipe/SearseRecipe",codeRecipe);
  }
  constructor(public http: HttpClient) { }
}

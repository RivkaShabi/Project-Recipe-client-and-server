import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/models/Recipe';
import { Category } from 'src/models/Category';

import { RecipesService } from '../recipes.service';
import { CategoryService } from '../category.service';
@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  r: Recipe = new Recipe(null, null, null, null, null, null, null, null, null, null, null);
  s: number = 0;
  constructor(public serRec: RecipesService, public active: ActivatedRoute, 
    public serCategory: CategoryService,public router: Router) {


  }
  arr: Recipe[] = [];
  arrCategory: Category[] = [];
  Cat: Category;
  nameCat() {
    for (let i = 0; i < this.arrCategory.length; i++) {
      if (this.arrCategory[i].CodeCategory == this.r.CodeCategory)
        return this.arrCategory[i].NameCategory;
    }
    this.arrCategory[this.r.CodeCategory]
  }
  iconCat() {
    for (let i = 0; i < this.arrCategory.length; i++) {
      if (this.arrCategory[i].CodeCategory == this.r.CodeCategory)
        return this.arrCategory[i].RoutingIcon;
    }
    this.arrCategory[this.r.CodeCategory]
  }
  ngOnInit() {
    this.active.params.subscribe((x) => {
      this.s = +x["recipe"];
      //בעת טעינת הדף
      this.serRec.GetAllRecipe().subscribe(secc => {
        this.arr = secc;
        this.r = this.arr[this.s];
      }, err => { console.log(err) }
      );
    })
    
    this.serCategory.GetAllCategory().subscribe(secc => {
      this.arrCategory = secc;
    }, err => { console.log(err) })

  }
  f() {
    let s = "";
    for (let index = 0; index < this.r.LevelOfDifficulty; index++) {
      s += "*";
  }
  return s;
  }
userEdit(){
  return(this.r.CodeUser==Number(sessionStorage.getItem("user")))
}
EditRecipe(){

  this.router.navigate(["editRecipe",this.r.CodeRecipe]);

}
}

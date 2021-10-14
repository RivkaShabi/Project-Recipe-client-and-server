import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(public serCategory: CategoryService, public serRec: RecipesService, public router: Router) { }
  arr: Recipe[] = [];
  myTime: number = -1;
  arr1: Recipe[] = [];
  arrCategory: Category[];
  categoryN: number = 0;
  name: string = "";
  ngOnInit() {
    this.serCategory.GetAllCategory().subscribe(secc => {
      this.arrCategory = secc;
    }, err => { console.log(err) })

    //בעת טעינת הדף
    this.serRec.GetAllRecipe().subscribe(secc => {
      this.arr1=secc;
      this.arr = secc;
    }, err => { console.log(err) }
    );


  }
  dd() {
    console.log(this.myTime)

  }
  nituv(index) {
    console.log(sessionStorage.getItem("user"))
    if (sessionStorage.getItem("user"))
      this.router.navigate(["recipedetails", index]);
    else

      this.router.navigate(["login"]);

  }


  cleanRecipe() {

    location.reload();

  }
  sanen() {
    this.arr1 = [];
    this.arr.forEach(element => {
      if ((element.CodeCategory == this.categoryN || this.categoryN == 0) &&
        (element.NameRecipe == this.name || this.name == "") &&
        (element.PreparationMinutes < this.myTime || this.myTime == -1)&&
        element.NameRecipe.includes(this.name)) {
        this.arr1.push(element);
      }
    });
 
 
  }
  // [
  //   new Recipe(12,"",1,45,2,new Date(),["dys","agg","agd"],["sfag","agg","agd"],1,"הורדה.jpg",true),
  //   new Recipe(12,"",1,45,2,new Date(),["dyfs","agg","agd"],["sfag","agg","agd"],1,"הורדה.jpg",true)
  //   ];
}  

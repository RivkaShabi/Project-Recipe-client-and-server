import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  constructor(public active: ActivatedRoute, public serCategory: CategoryService, public serRecipe: RecipesService, public router: Router) {

  }
  arr: String[] = [""];
  arr1: String[] = [""];
  i: number = 0;
  addR: Recipe = new Recipe(null, null, null, null, null, null, null, null, null, null, null);
  arrCategory: Category[] = [];

  // lavelRecipe: string[] = ["*", "**", "***", "****", "*****"]
 lavelRecipe: number[] = [1,2,3,4,5]

  ngOnInit(): void {
    this.active.params.subscribe((x) => {
      this.i = Number(x["code"]);
      this.serRecipe.SearseRecipe(this.i).subscribe(secc => {
        this.addR = secc;
        this.arr = this.addR.ListPreparation;
        this.arr1 = this.addR.ListComponent;
        this.arr .push("")
        this.arr1 .push("")
      }, err => { console.log(err) })
    });

    this.serCategory.GetAllCategory().subscribe(
      data => {
        this.arrCategory = data;
      }
    )
  }
  pushArr() {
  
    this.arr.forEach((element, i) => {
      if ((element == "" || element == undefined || element == null))
        this.arr.splice(i, 1);
    });
    this.arr.push("");

  }
  pushArr1() {
    this.arr1.forEach((element, i) => {
      if ((element == "" || element == undefined || element == null))
        this.arr1.splice(i, 1);
    });
    this.arr1.push("");

  }
  //   trackByFn(index: any, item: any) {
  //     return index;
  //  }

  checkRecipe() {
    // this.addR.NameRecipe = this.FormAddRecipe.value.nameRecipce;
    // this.addR.NameRecipe = this.FormAddRecipe.value.nameRecipce;
    // this.addR.PreparationMinutes = this.FormAddRecipe.value.timePreper;
    // this.addR.DoDisplay = this.FormAddRecipe.value.doShow;
    // this.addR.AddDateRecipe=new Date();


    this.arr = this.arr.filter(item => item != "");
    this.arr1 = this.arr1.filter(item => item != "");
    this.addR.ListComponent = this.arr1;
    this.addR.ListPreparation = this.arr;

    this.addR.CodeUser = Number(sessionStorage.getItem("user"));
    var obs = this.serRecipe.EditRecipe(this.addR).subscribe(
      data => {
        this.router.navigate(["allrecipes"]);
      }
    );
  }
  addCat(catego: Category) {
    this.addR.CodeCategory = catego.CodeCategory;

  }

  addLavel(lavelCurr: number) {
    this.addR.LevelOfDifficulty = lavelCurr;

  }



  deleteChange() {
    location.reload();
  }
  trackByFn(index: any, item: any) {
    return index;
  }

}

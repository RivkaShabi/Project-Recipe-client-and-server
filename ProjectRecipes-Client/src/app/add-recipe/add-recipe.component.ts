import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipesService } from '../recipes.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RangeValidation } from 'src/RangeValidation';
@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(public serCategory: CategoryService, public serRecipe: RecipesService, public router: Router) { }
  arr: String[] = [""];
  arr1: String[] = [""];
  addR: Recipe = new Recipe(null, null, null, null, null,null,[""],[""],null,null,null);
 
  arrCategory: Category[] = [];
  addRecipes: FormGroup;
  lavelRecipe: string[] = ["*", "**", "***", "****", "*****"]
  ngOnInit(): void {
//  this.addR.ListComponent=[""];
//  this.addR.ListPreparation=[""];

    // this.addRecipes = new FormGroup({
    //   'NameRecipe': new FormControl('', Validators.required),
    //   'cat': new FormControl('', Validators.required),
    //   'rr': new FormControl('', Validators.required),
    //   'is': new FormControl('', Validators.required),
    //   //'arr1':new FormControl('',Validators.required),
    //   // 'arr':new FormControl('',Validators.required),

    //   // 'PreparationMinutes': new FormControl('', RangeValidation.NotNegetiv())
    // })
    this.serCategory.GetAllCategory().subscribe(secc => {
      this.arrCategory = secc;
    }, err => { console.log(err) })

  }
  pushArr() {
    console.log( this.addR.ListPreparation)
    this.addR.ListPreparation.forEach((element, i) => {
      if ((element == "" || element == undefined || element == null))
        this.addR.ListPreparation.splice(i, 1);
    });
      this.addR.ListPreparation.push("");

  }
  pushArr1() {
    this.addR.ListComponent.forEach((element, i) => {
      if ((element == "" || element == undefined || element == null))
        this.addR.ListComponent.splice(i, 1);
    });
      this.addR.ListComponent.push("");
  }

  checkRecipe(mytime: string, nameRecipe: number) {
    // this.addR.NameRecipe = this.FormAddRecipe.value.nameRecipce;
    // this.addR.NameRecipe = this.FormAddRecipe.value.nameRecipce;
    // this.addR.PreparationMinutes = this.FormAddRecipe.value.timePreper;
    // this.addR.DoDisplay = this.FormAddRecipe.value.doShow;
    // this.addR.AddDateRecipe=new Date();


    this.addR.ListComponent = this.addR.ListComponent.filter(item => item != "");
    this.addR.ListPreparation= this.addR.ListPreparation.filter(item => item != "");

    if (mytime == "" || nameRecipe <= 0)
      alert("אחד או יותר מהנתונים חסר!");
    else {
      Swal.fire('המתכון נוסף בהצלחה!', 'לעוד אלפי מתכונים בבלוברי ', 'success');
      this.addR.CodeUser = Number(sessionStorage.getItem("user"));
      var obs = this.serRecipe.AddRecipe(this.addR).subscribe(
        data => {
          this.router.navigate(["allrecipes"]);
        }
      );

    }



  }
  addCat(catego: Category) {
    this.addR.CodeCategory = catego.CodeCategory;

  }

  addLavel(lavelCurr: number) {
    this.addR.LevelOfDifficulty = lavelCurr;

  }
  trackByFn(index: any, item: any) {
    return index;
  }
}

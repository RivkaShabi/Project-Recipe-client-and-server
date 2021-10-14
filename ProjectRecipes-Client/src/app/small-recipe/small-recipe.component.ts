import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
@Component({
  selector: 'small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  r: Recipe;
  f() {
    let s = "";
    for (let index = 0; index < this.r.LevelOfDifficulty; index++) {
      s += "*";
  }
  return s;
  }
  ff(){
    return this.r.DoDisplay;
  }
}

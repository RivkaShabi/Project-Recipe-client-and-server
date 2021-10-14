import { registerLocaleData } from '@angular/common';
import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Recipe } from 'src/models/Recipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{path:"recipedetails/:recipe",component:RecipeDetailsComponent},
{path:"editRecipe/:code",component:EditRecipeComponent},
{path:"login",component:LoginComponent},
{path:"register/:name",component:RegisterComponent},
{path:"register",component:RegisterComponent},
{path:"allrecipes",component:AllRecipesComponent},
{path:"addrecipe",component:AddRecipeComponent},
{path:"",component:LoginComponent,pathMatch: "full" },
{path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

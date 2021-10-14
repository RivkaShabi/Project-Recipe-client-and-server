import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import{ HttpClientModule} from '@angular/common/http';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CalculateHourPipe } from './calculate-hour.pipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    SmallRecipeComponent,
    RecipeDetailsComponent,
    CalculateHourPipe,
    AddRecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

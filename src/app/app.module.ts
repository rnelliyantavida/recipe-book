import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipedetailsComponent } from './recipes/recipedetails/recipedetails.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeSerive } from './recipes/recipe.service';

// const appRoutes: Routes = [
//   {path:"/", component: HeaderComponent},
//   {path:"/recipe", component: RecipesComponent},
//   {path:"/shoppinglist", component: ShoppinglistComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailsComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService,RecipeSerive],
  bootstrap: [AppComponent]
})
export class AppModule { }

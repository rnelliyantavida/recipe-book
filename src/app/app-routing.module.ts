import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipedetailsComponent } from "./recipes/recipedetails/recipedetails.component";
import { RecipelistComponent } from "./recipes/recipelist/recipelist.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";

const appRoutes: Routes = [
    {path: '', redirectTo:'/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path :':id', component: RecipedetailsComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppinglistComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
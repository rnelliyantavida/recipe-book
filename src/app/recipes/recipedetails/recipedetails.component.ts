import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shoppinglist/shoppinglist.service';
import { RecipeSerive } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private shoppingListService: ShoppingListService, 
    private route: ActivatedRoute, 
    private recipeService: RecipeSerive,
    private router: Router) { }

  ngOnInit(): void {
    //this.recipe = this.recipeService.recipes[this.route.snapshot.params['id']];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }
  onAddtoShop(){
    for(const ingredient of this.recipe.ingredients){
      this.shoppingListService.onAddedItem(ingredient);
    }
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo: this.route});
  }
}

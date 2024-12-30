import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{
  indexEmitter = new Subject<number>();
  ingredients: Ingredient[] = [new Ingredient('Apple',5),new Ingredient('Tomato',10)];
  onAddedItem(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
  updateIngredient(index: number, name: String, amount: number){
    this.ingredients[index] = new Ingredient(name,amount);
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
  }
}
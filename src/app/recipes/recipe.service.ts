import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Recipe } from "./recipes.model";
export class RecipeSerive{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('chicken',
                   'make chicken',
                   'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
                   [new Ingredient('chicken',1), new Ingredient('spices',1)]),
        new Recipe('Fried Mussel',
                   'Fry mussels with filling rice paste',
                   'https://taste.mv/wp-content/uploads/2020/08/2-895x470.jpg',
                   [new Ingredient('mussle',50), new Ingredient('oil',2),new Ingredient('rice',3)])];
    getRecipes(){
        return this.recipes;
    }
    getRecipeById(index: number){
        return this.recipes.slice()[index];
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
    }
    updateRecipe(index: number,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
    }
    deleteRecipe(index: number){
        this.recipes.splice(index,1);
    }
    // removeIngredient(index:number, indexIngredient: number){
    //    console.log(this.recipes[index].ingredients.splice(indexIngredient,1));
    // }
}
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeSerive } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeSerive,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        //console.log(params['id']);
        localStorage.setItem("recipeId", params['id'])
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+[1-9]*$/)])
      })
    );
  }

  private initForm(){

    let recipeName: String = '';
    let recipeImage: String = '';
    let recipeDescription: String = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[0-9]+[1-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImage,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients
    });
    
  }

  onSubmit(){
    // const newRecipe =  new Recipe(this.recipeForm.value.name,
    //                               this.recipeForm.value.description,
    //                               this.recipeForm.value.imagePath,
    //                               this.recipeForm.value.ingredients);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    //var c: number = 3;
    //this.recipeForm.reset();
    //window.open("about:blank", "_self");
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  // getControls(){
  //   return (<FormArray>this.recipeForm.get('ingredients')).controls;
  // }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onDeleteIngredient(ingredientIndex: number){
    // console.log(this.recipeForm.value.ingredients[ingredientIndex]);
    // this.recipeService.removeIngredient(this.id,ingredientIndex);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingredientIndex);
  }
  
}

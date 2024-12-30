import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeSerive } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
 
  recipes: Recipe[];

  constructor(private recipeService: RecipeSerive,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}

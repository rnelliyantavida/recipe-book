import { Component, OnInit, Input} from '@angular/core';
import { RecipeSerive } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input('recipeItem') recipe: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipeSerive) { }

  ngOnInit(): void {
  }
  
}

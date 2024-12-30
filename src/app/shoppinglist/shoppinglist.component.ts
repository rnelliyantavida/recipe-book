import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
  }
  onEditItem(index: number){
    this.shoppingListService.indexEmitter.next(index);
  }
}

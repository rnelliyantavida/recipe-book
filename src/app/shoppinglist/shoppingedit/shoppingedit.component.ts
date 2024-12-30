import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit,OnDestroy {
  editItemSubscription: Subscription;
  @ViewChild('f') slForm: NgForm;
  index: number;
  editMode = false;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editItemSubscription = this.shoppingListService.indexEmitter.subscribe(
      (index: number) => {
        this.index = index;
        this.editMode = true;
        this.slForm.setValue({
          'name': this.shoppingListService.ingredients[index].name,
          'amount': this.shoppingListService.ingredients[index].amount
        });
      }
    );
  }
  onAddItem(form: NgForm){
    const value = form.value;
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.index, this.slForm.value.name, this.slForm.value.amount);
    }else{
      const newIngredient = new Ingredient(value.name,value.amount);
      this.shoppingListService.ingredients.push(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.index);
    this.onClear();
  }
  ngOnDestroy(): void {
    this.editItemSubscription.unsubscribe();
  }
}

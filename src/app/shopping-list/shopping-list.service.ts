import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  //ingredientsChange = new EventEmitter<Ingredient[]>();
  ingredientsChange = new Subject()<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.ingredientsChange.emit(this.ingredients.slice());
    this.ingredientsChange.next(this.ingredients.slice());
  }
  addIngriedents(ingredients: Ingredient[]) {
   // for (let ingredient of ingredients) {
  //    this.addIngredient(ingredient);
   // }
    this.ingredients.push(...ingredients);
    //this.ingredientsChange.emit(this.ingredients.slice());
    this.ingredientsChange.next(this.ingredients.slice());
  }
}

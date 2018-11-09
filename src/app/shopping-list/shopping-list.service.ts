import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  //ingredientsChange = new EventEmitter<Ingredient[]>();
  ingredientsChange = new Subject()<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
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

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}

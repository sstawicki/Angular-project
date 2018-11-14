import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs-compat/add/operator/map';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authservice: AuthService) {
  }

  storeRecipes() {
    const token = this.authservice.getToken();

    return this.http.put('https://ng-recipe-book-43824.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      params: new HttpParams().set('auth', token)
    });
  }

  getRecipes() {

    const token = this.authservice.getToken();

    this.http.get<Recipe[]>('https://ng-recipe-book-43824.firebaseio.com/recipes.json' + token, {
      params: new HttpParams().set('auth', token)
    })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}

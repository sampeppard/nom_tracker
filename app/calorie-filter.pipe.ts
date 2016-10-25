import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calorie-filter',
  pure: false
})

export class CalorieFilter implements PipeTransform {
  transform(input: Meal[]) {
    
  }
}

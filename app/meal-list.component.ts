import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-list",
  template: `
  <div *ngFor="let currentMeal of childMealList">
    <div class="listed-meal">
      <p class="meal-number">{{childMealList.indexOf(currentMeal) + 1}}.  </p>
      <meal-display [meal]="currentMeal"></meal-display>
      <button class="btn btn-xs" (click)="editButtonClicked(currentMeal)">Edit</button>
    </div>
    <br>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}

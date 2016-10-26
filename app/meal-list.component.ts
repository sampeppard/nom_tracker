import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-list",
  template: `
  <p>Filter meals by caloric amount.</p>
  <select class="form-control calorie-range" (change)="onCalorieChange($event.target.value)">
    <option value="all">All Meals</option>
    <option value="high-calorie">High Calorie Meals</option>
    <option value="low-calorie">Low Calorie Meals</option>
  </select>
  <br>
  <div *ngFor="let currentMeal of childMealList | calorieFilter:filteredCalories">
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
  public filteredCalories = "all";
  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onCalorieChange(calorieInput) {
    this.filteredCalories = calorieInput;
  }

}

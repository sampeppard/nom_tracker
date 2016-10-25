import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <form>
      <div class="form-group">
        <label>Enter New Meal Name:</label>
        <input class="form-control" #newName>
        <label>Enter New Meal Details:</label>
        <input class="form-control" #newDetails>
        <label>Enter New Meal Calorie Amount:</label>
        <input class="form-control" type="number" #newCalories>
      </div>
      <br>
      <button class="btn btn-success" (click)="addClicked(newName.value, newDetails.value, newCalories.value);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
      ">Add Meal</button>
    </form>
  `
})

export class NewMealComponent {
  @Input() childMealList: Meal[];
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMeal: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMeal);
  }
}

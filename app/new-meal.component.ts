import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <form>
      <div class="form-group">
        <label>Enter New Meal ID:</label>
        <input class="form-control" #newId>
        <label>Enter New Meal Name:</label>
        <input class="form-control" #newName>
        <label>Enter New Meal Details:</label>
        <input class="form-control" #newDetails>
        <label>Enter New Meal Calorie Amount:</label>
        <input class="form-control" type="number" #newCalories>
      </div>
      <br>
      <button class="btn btn-success" (click)="addClicked(newId.value, newName.value, newDetails.value, newCalories.value);
        newId.value='';
        newName.value='';
        newDetails.value='';
        newCalories.value='';
      ">Add Meal</button>
    </form>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(id: number, name: string, details: string, calories: number) {
    var newMeal: Meal = new Meal(id, name, details, calories);
    this.newMealSender.emit(newMeal);
  }
}

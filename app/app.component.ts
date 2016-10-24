import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <h1>NOM Tracker</h1>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 tracked-meals">
          <br>
          <h1>Your Daily Meals</h1>
          <br>
          <meal-list
            [childMealList]="masterMealList"
            (clickSender)="showDetails($event)"
          ></meal-list>
        </div>
        <div class="col-sm-6 add-meals">
          <br>
          <h1>Add Meals</h1>
          <br>
          <new-meal
            (newMealSender)="addMeal($event)"
          ></new-meal>
        </div>
      </div>
    </div>
    <footer>
      Copyright 2016 | Developed by Sam Peppard
    </footer>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal(1, "Fajitas", "Lean chicken", 850),
    new Meal(2, "Burger", "Made with lean ground turkey", 500),
    new Meal(3, "Chicken Tika Masala", "Lean chicken", 750)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  addMeal(newMealAdded: Meal) {
    this.masterMealList.push(newMealAdded);
  }
}

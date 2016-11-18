import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finshedEditing()"
    ></edit-meal>
    <header>
      <h1>NOM Tracker</h1>
    </header>
    <div class="container">
      <br>
      <br>
      <div class="row">
        <div class="col-sm-6 tracked-meals">
          <br>
          <h1>Your Daily Meals</h1>
          <h3>Meal Amount: {{ masterMealList.length }}</h3>
          <h3>Your Daily Calorie Total: {{ total }}</h3>
          <br>
          <meal-list
            [childMealList]="masterMealList"
            (clickSender)="showDetails($event)"
          ></meal-list>
          <br>
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
    new Meal("Fajitas", "Lean chicken", 850),
    new Meal("Turkey Burger", "Made with lean ground turkey", 450),
    new Meal("Chicken Tikka Masala", "Lean chicken", 750)
  ];
  selectedMeal: Meal = null;
  public total: number = 0;

  ngOnInit() {
    this.countCalories();
  }
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finshedEditing() {
    this.selectedMeal = null;
    this.countCalories();
  }
  addMeal(newMealAdded: Meal) {
    this.masterMealList.push(newMealAdded);
    this.countCalories();
  }

  countCalories() {
    this.total = 0;
    for (var i = 0; i < this.masterMealList.length; i++) {
      this.total += this.masterMealList[i].calories;
    }
  }

}

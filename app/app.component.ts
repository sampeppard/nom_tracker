import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <h1>NOM Tracker</h1>
    </header>
    <div class="container">
      <div *ngFor="let currentMeal of MasterMealList">
      <h5>{{ currentMeal.name }}</h5>
        <ul>
          <li>{{ currentMeal.details }}</li>
          <li>{{ currentMeal.calories }}</li>
        </ul>
      </div>
    </div>
    <footer>
      Copyright 2016 | Developed by Sam Peppard
    </footer>
  `
})

export class AppComponent {
  public MasterMealList: Meal[] = [
    new Meal(0, "Fajitas", "Lean chicken", 850),
    new Meal(1, "Burger", "Made with lean ground turkey", 500),
    new Meal(2, "Chicken Tika Masala", "Lean chicken", 750)
  ];
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <h5 class="meal">{{ meal.name }}</h5>
  <button class="btn btn-xs" (click)="showDetails()">
    <span *ngIf="display === false">View More Info</span>
    <span *ngIf="display === true">Hide Info</span>
  </button>
  <ul class="list-group" *ngIf="display === true">
    <li class="list-group-item">Details: {{ meal.details }}</li>
    <li class="list-group-item">Calories: {{ meal.calories }}</li>
  </ul>
  `
})

export class MealComponent {
  @Input() meal: Meal;
  public display: boolean = false;
  showDetails() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
}

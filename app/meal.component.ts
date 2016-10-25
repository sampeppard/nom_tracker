import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <h5 (click)="showDetails()">{{ meal.name }}<span *ngIf="display === false"> | click to display more info </span><span *ngIf="display === true"> | click to hide info </span></h5>
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

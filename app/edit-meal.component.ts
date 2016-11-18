import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <div class="center-container"></div>
    <div class="edit-meal">
    <br>
      <h3>Edit Meal</h3>
      <label>Edit Meal Name</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.name">
      <label>Edit Meal Details</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.details">
      <label>Edit Meal Calorie Amount</label>
      <input type="number" class="form-control" [(ngModel)]="childSelectedMeal.calories">
      <br>
      <button class="btn btn-success" (click)="doneClicked()">Done</button>
      <br>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

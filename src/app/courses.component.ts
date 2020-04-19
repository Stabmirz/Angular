import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
    <button (click)="decrement()">-</button>
    <span>{{counter}}</span>
    <button (click)="increment()">+</button>
    <input [value]="username" (input)="username = $event.target.value" class="form-control form-control-lg">
    <p>Hello {{username || 'World'}}!</p>

  `
})

export class CoursesComponent{
    username = 'Mariah';

  counterValue = 0;

  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}
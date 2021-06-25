import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterModule } from '../state/counter.module';
import { CountBadgeComponent } from './count-badge.component';
import { MyCounterComponent } from './my-counter.component';

@NgModule({
  declarations: [CountBadgeComponent, MyCounterComponent],
  imports: [CommonModule, CounterModule, ReactiveFormsModule],
  exports: [MyCounterComponent],
  providers: []
})
export class CountModule {}

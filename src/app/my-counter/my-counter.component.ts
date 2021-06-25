import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CounterFacadeService } from '../state/counter-facade.service';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCounterComponent implements OnInit {
  newValueCtl = new FormControl(0);
  count$: Observable<number>;

  constructor(private countService: CounterFacadeService) {}

  increment() {
    this.countService.incrementCount();
  }

  decrement() {
    this.countService.decrementCount();
  }

  reset() {
    this.countService.resetCount();
  }

  newValueClick() {
    this.setvalue(this.newValueCtl.value);
  }

  setvalue(val: number) {
    this.countService.setValue(val);
  }

  loadValues() {
    this.countService.loadValue();
  }

  ngOnInit() {
    this.count$ = this.countService.getCount();
    this.count$.subscribe(newCount => this.newValueCtl.setValue(newCount));
  }
}

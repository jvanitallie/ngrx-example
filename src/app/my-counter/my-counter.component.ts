import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { CounterFacadeService } from "../state/counter-facade.service";

@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
  .myCounterResult {
background-color: Purple;
color: white;
font-size: 18pt;
width: 100px;
margin: 10px auto 20px auto ;
padding: 5px;
text-align: center;
border: 2px;
border-style: solid;
border-color: black;
border-radius: 10px;
  }
  `]
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

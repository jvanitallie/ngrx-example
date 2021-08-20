import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class CounterService {
  public loadCounter(): Observable<any> {
    return of({newValue:123456});
  }
}

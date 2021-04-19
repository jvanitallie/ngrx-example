import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class CounterService {
  public loadCounter(): Observable<number> {
    return of(1999);
  }
}

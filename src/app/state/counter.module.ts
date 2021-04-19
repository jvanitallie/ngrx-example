import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CounterFacadeService } from "./counter-facade.service";
import { CounterEffects } from "./counter.effects";
import * as fromCounter from "./counter.reducer";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromCounter.featureKey, fromCounter.counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  providers: [CounterFacadeService]
})
export class CounterModule {}

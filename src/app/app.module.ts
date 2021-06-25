import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CountModule } from './my-counter/count.module';
import { CounterService } from './services/counter.service';
import { CounterModule } from './state/counter.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CounterModule,
    CountModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [CounterService]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/

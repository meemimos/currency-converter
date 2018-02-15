import { CurrencyService } from './services/currency.service';
import { CurrencyEffects } from './effects/currencyEffects';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CurrencyEffects])
  ],
  providers: [Title, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

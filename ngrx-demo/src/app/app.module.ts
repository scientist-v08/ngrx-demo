import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { OnBoardingComponent } from './onboarding/onboarding.component';
import { onBoardingFeatureKey, onBoardingReducer } from './store/reducers';
import { PreviewComponent } from './preview/preview.component';
import { VersionComponent } from './version/version.component';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingComponent,
    PreviewComponent,
    VersionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(onBoardingFeatureKey, onBoardingReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

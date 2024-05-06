import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectIsMain, selectIsPreview, selectIsVersion } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  data$ = combineLatest([
    this.store.select(selectIsMain),
    this.store.select(selectIsPreview),
    this.store.select(selectIsVersion)
  ])
  constructor(private store:Store){}

}


import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiService } from "../services/api.service";
import { selectData } from "../store/reducers";
import { switchMap } from "rxjs";
import { MessageInterface } from "../model/message.model";
import { EmptyInterface, onboardingActions } from "../store/actions";

@Component({
  selector:'app-preview',
  templateUrl:'./preview.component.html'
})
export class PreviewComponent{

  apiResponse:string='';
  constructor(
    private store:Store,
    private apiService:ApiService
  ){}

  ngOnInit():void{
    this.apiInitializer();
  }

  private apiInitializer():void{
    this.store.select(selectData)
    .pipe(
      switchMap((res: string) => {
        return this.apiService.getPreviewDetails(res);
      })
    )
    .subscribe((res: MessageInterface) => {
      this.apiResponse = res.message;
    });
  }

  goToMain():void{
    const nullData:EmptyInterface = {
      empty:null
    }
    this.store.dispatch(onboardingActions.moveFromPreviewToMain(nullData));
  }

  goToVersion():void{
    const nullData:EmptyInterface = {
      empty:null
    }
    this.store.dispatch(onboardingActions.moveFromPreviewToVersion(nullData));
  }

}

import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectData } from "../store/reducers";
import { ApiService } from "../services/api.service";
import { MessageInterface } from "../model/message.model";
import { switchMap } from "rxjs";
import { EmptyInterface, onboardingActions } from "../store/actions";

@Component({
  selector:'app-version',
  templateUrl:'./version.component.html'
})
export class VersionComponent{

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
        return this.apiService.getVersionDetails(res);
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
    this.store.dispatch(onboardingActions.moveFromVersionToMain(nullData))
  }

  goToPreview():void{
    const nullData:EmptyInterface = {
      empty:null
    }
    this.store.dispatch(onboardingActions.moveFromVersionToPreview(nullData));
  }

}

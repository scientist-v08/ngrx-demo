import { Component, OnDestroy, OnInit } from "@angular/core";
import { AllDetail, GetInterface } from "../model/get.model";
import { ApiService } from "../services/api.service";
import { Subject, takeUntil } from "rxjs";
import { Store } from "@ngrx/store";
import { onboardingActions } from "../store/actions";

@Component({
  selector:"app-onboarding",
  templateUrl:"./onboarding.component.html"
})
export class OnBoardingComponent implements OnInit,OnDestroy{

  response:AllDetail[]=[];
  unsubscribe$=new Subject<void>();
  constructor(
    private apiService:ApiService,
    private store:Store
  ){}

  ngOnInit(): void {
    this.apiService.getAllOnboardingDetails()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res:GetInterface)=>{
        this.response=res.allDetails;
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onPerviewClicked(_data:string){
    this.store.dispatch(onboardingActions.moveToPreview({
      isMain:false,
      isPreview:true,
      isVersion:false,
      data:_data
    }))
  }

  onVersionClicked(_data:string){
    this.store.dispatch(onboardingActions.moveToVersion({
      isMain:false,
      isPreview:false,
      isVersion:true,
      data:_data
    }))
  }

}

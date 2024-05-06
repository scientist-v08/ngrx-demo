import { createActionGroup, props } from "@ngrx/store";
import { StateInterface } from "../model/store.model";

export interface EmptyInterface {
  empty:null
}

export const onboardingActions = createActionGroup({
  source:'onBoardingState',
  events:{
    'Move to preview':props<StateInterface>(),
    'Move to version':props<StateInterface>(),
    'Move from preview to main':props<EmptyInterface>(),
    'Move from version to main':props<EmptyInterface>(),
    'Move from preview to version':props<EmptyInterface>(),
    'Move from version to preview':props<EmptyInterface>()
  }
});

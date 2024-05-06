import { createFeature, createReducer, on } from "@ngrx/store";
import { StateInterface } from "../model/store.model";
import { onboardingActions } from "./actions";

const initialState : StateInterface = {
  isMain: true,
  isPreview: false,
  isVersion: false,
  data: ""
}

const onBoardingFeature = createFeature({
  name: 'onBoardingState',
  reducer: createReducer(
    initialState,
    on(
      onboardingActions.moveToPreview,
      (state,action)=>({
        ...state,
        isMain:false,
        isPreview:true,
        isVersion:false,
        data:action.data
      })
    ),
    on(
      onboardingActions.moveToVersion,
      (state,action)=>({
        ...state,
        isMain:false,
        isPreview:false,
        isVersion:true,
        data:action.data
      })
    ),
    on(
      onboardingActions.moveFromVersionToMain,
      state=>({
        ...state,
        isMain:true,
        isPreview:false,
        isVersion:false,
        data:""
      })
    ),
    on(
      onboardingActions.moveFromPreviewToMain,
      state=>({
        ...state,
        isMain:true,
        isPreview:false,
        isVersion:false,
        data:""
      })
    ),
    on(
      onboardingActions.moveFromPreviewToVersion,
      state=>({
        ...state,
        isPreview:false,
        isVersion:true,
      })
    ),
    on(
      onboardingActions.moveFromVersionToPreview,
      state=>({
        ...state,
        isVersion:false,
        isPreview:true,
      })
    )
  )
});

export const {
  name: onBoardingFeatureKey,
  reducer: onBoardingReducer,
  selectIsMain,
  selectIsPreview,
  selectIsVersion,
  selectData
} = onBoardingFeature

import { createSelector, createFeatureSelector } from "@ngrx/store";
import { State, AppState } from '../store';

const selectAppstoreObj = createFeatureSelector<State, AppState>('appState');

export const isEditMode = createSelector(
    selectAppstoreObj,
    (obj: AppState) => obj.isEdit
)

export const isPlayoff = createSelector(
    selectAppstoreObj,
    (obj: AppState) => obj.isPLayoff 
)

export const isLoading = createSelector(
    selectAppstoreObj,
    (obj: AppState) => obj.isLoading
)
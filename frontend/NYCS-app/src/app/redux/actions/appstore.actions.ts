import { createAction } from '@ngrx/store';


export enum appstoreActionsType {
    editMode = '[APPSTATE] edit mode is activated',
    regularMode = '[APPSTATE] edit mode is deactivated to regular mode'
}

export const editMode = createAction(appstoreActionsType.editMode);
export const regularMode = createAction(appstoreActionsType.regularMode);
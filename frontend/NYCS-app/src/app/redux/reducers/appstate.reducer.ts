import { AppState } from "../store";
import { createReducer, on, Action } from '@ngrx/store';

import { editMode, regularMode } from '../actions/appstore.actions'


const initialState: AppState = {
    isEdit: false
};

const reducer = createReducer(initialState,
    on(editMode, (state) => ({ ...state, isEdit: true })),
    on(regularMode, (state) => ({ ...state, isEdit: false }))
);

export function appstateReducer(state: AppState, action: Action) {
    return reducer(state, action);
}
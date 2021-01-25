import { MimeTypeAction, MimeTypeActionTypes } from './../actions/mime-type-actions';

export interface MimeTypesState {
    filtering: boolean;
    elements: Map<string, string[]>;
}

const initalState: MimeTypesState = {
    filtering: false,
    elements: new Map()
}

function reducer(state: MimeTypesState = initalState, action: MimeTypeAction): MimeTypesState {
    switch (action.type) {
        case MimeTypeActionTypes.APPLY_FILTER: {
            return { ...state, filtering: true };
        }

        case MimeTypeActionTypes.APPLY_FILTER_SUCCEEDED: {
            return { filtering: false, elements: action.elements };
        }

        default:
            return state;
    }
}

export default reducer;

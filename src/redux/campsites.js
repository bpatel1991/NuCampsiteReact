import * as ActionTypes from './ActionTypes';

//holds three properties, a boolean isLoading property,  errMess property, campsites array, initialized all here with default function parameter syntax//
export const Campsites = (state = {
    isLoading: true,
    errMess: null,
    campsites: []
}, action) => {
    //reducer's switch statement//
switch (action.type) {

    //for ADD_CAMPSITES action type, return new state, consists of previous state spread out, update values to say "is no longer loading", no error message, campsites array will be populated with payload//
    case ActionTypes.ADD_CAMPSITES:
        return {...state, isLoading: false, errMess: null, campsites: action.payload};

    //for CAMPSITES_LOADING, return new state, consisting of previous state spread out, update values to say it is loading, no error message, campsites is an empty array b/c haven't finished loading data yet//
    case ActionTypes.CAMPSITES_LOADING:
        return {...state, isLoading: true, errMess: null, campsites: []};

    //for CAMPSITES_FAILED, return new state, isLoading is false, errMess to actions  payload, don't need to update campsite array for this one//
    case ActionTypes.CAMPSITES_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
        
    default:
        return state;
}
};
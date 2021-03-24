import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';


export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});
//nested an arrow function inside an arrow function below//
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};
//one arrow, standard action creator, no payload, just type. not thunk, goes straight to reducer as normal//
export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});
//action for campsitesFailed, passing error message as payload.//
export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});
//addCampsites action, campsites parameter, normal action creator, returns object, not another function, so not using Thunk. Has campsites argument that was passed in which should be an array as the payload//
export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});
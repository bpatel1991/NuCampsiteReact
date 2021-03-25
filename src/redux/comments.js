import * as ActionTypes from './ActionTypes';

//
export const Comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS: //returns previous state updated with null error message, and comments array from action payload//
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED: //returns previous state, along with error message from action payload//
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};
//spread previous state and add comments property, concat it//
        default:
            return state;
    }
};
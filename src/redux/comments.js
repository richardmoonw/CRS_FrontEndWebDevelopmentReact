import * as ActionTypes from './ActionTypes';

// We use state.concat because we should remember that in the Redux architecture the state
// is never modified by a reducer, this one only must copy, make the necessary changes and
// return it as a new state.

export const Comments = (state = {
        errMess: null,
        comments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errMess: null, comments: action.payload }
        
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, comments: [] }
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment) };
        
        default:
            return state;
    }
}


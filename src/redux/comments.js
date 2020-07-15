import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// We use state.concat because we should remember that in the Redux architecture the state
// is never modified by a reducer, this one only must copy, make the necessary changes and
// return it as a new state.

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}


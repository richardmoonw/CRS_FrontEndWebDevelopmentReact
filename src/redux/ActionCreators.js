import * as ActionTypes from './ActionTypes';

// This is a function that creates an action object. Remember that a REDUCER receives an action object 
// and the current state of the application to create a new one based on these two. So this is an important 
// part because the actions are payloads of information that send data from your application to your store. 
// They are only source of information for the store. Here we use a standard for a action function: it receives
// all the data to be updated and returns an object with a type and a payload (these names are just conventional).
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
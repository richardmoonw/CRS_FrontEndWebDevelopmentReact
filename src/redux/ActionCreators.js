import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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

// This is a thunk because instead of returning the action, it executes extra calulations before the real action
// is returned and the change to the state is triggered.
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
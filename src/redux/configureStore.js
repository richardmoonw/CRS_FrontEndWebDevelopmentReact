import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InititalFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            // If we are using React Redux Forms we do not need to create our own reducers or action creators.
            // This library already includes all the required features to work with the store. 
            ...createForms({
                feedback: InititalFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
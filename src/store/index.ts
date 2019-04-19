import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { userReducer } from '@ReduxReducers/userReducer';
import { UserState, UserActions } from '@ReduxTypes/userTypes';

export type RootState = {
  user: UserState;
};

const middleware: any = [];

export default createStore<RootState, UserActions, any, any>(
  combineReducers<RootState>({
    user: userReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

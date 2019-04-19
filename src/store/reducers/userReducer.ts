import * as R from 'ramda';

import { UserActionConstants, UserActions, UserState } from '@ReduxTypes/userTypes';

const initialState: UserState = {
  firstName: 'Denis',
  lastName: 'Voloshin'
};

export function userReducer(state: UserState = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionConstants.SET_FIRST_NAME: {
      return R.assoc<string, UserState, 'firstName'>('firstName', action.payload.firstName, state);
    }
    case UserActionConstants.SET_LAST_NAME: {
      return R.assoc<string, UserState, 'lastName'>('lastName', action.payload.lastName, state);
    }
    default: {
      return state;
    }
  }
}

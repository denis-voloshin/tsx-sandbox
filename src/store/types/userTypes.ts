import { ActionType } from 'typesafe-actions';

import * as userActions from '@ReduxActions/userActions';

export enum UserActionConstants {
  SET_FIRST_NAME = 'USER/SET_FIRST_NAME',
  SET_LAST_NAME = 'USER/SET_LAST_NAME'
}

export type UserActions = ActionType<typeof userActions>;

export type UserState = {
  firstName: string,
  lastName: string
};

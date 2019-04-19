import { action } from 'typesafe-actions';

import { UserActionConstants } from '@ReduxTypes/userTypes';

export function setFirstName(firstName: string) {
  return action(UserActionConstants.SET_FIRST_NAME, { firstName });
}

export function setLastName(lastName: string) {
  return action(UserActionConstants.SET_LAST_NAME, { lastName });
}

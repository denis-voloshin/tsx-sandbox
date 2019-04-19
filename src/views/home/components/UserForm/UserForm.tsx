import * as React from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as userActions from '@ReduxActions/userActions';
import { useDocumentTitle } from '@Utils/hooks';
import { RootState } from '@ReduxStore';
import { Dispatch } from 'redux';
import { UserActions, UserState } from '@ReduxTypes/userTypes';

const UserFormContainer = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin: 10px;
  width: 300px;
  background-color: #fff;
`;

const UserFormInputBlock = styled.p`
  display: flex;
  flex-direction: column;
  
  :not(:first-child) {
    margin-top: 10px;
  }
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const UserFormInput = styled.input.attrs({
  type: 'text'
})`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #e6e6e6;
  transition: box-shadow .1s;
  
  :focus {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
    
    ::-webkit-input-placeholder {
      color: transparent;
    }
    :-moz-input-placeholder {
      color: transparent;
    }
  }
`;

const mapStateToProps = ({ user }: RootState) => user;
const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
  changeFirstName(firstName: string) {
    dispatch(userActions.setFirstName(firstName));
  },
  changeLastName(lastName: string) {
    dispatch(userActions.setLastName(lastName));
  }
});

type ReduxStateProps = ReturnType<typeof mapStateToProps>;
type ReduxDispatchProps = ReturnType<typeof mapDispatchToProps>;
type ReduxProps = ReduxStateProps & ReduxDispatchProps;

const UserForm: React.FunctionComponent<ReduxProps> = (props): React.ReactElement => {
  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
    },
    []
  );

  const handleFirstNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const firstName = e.target.value;

      if (!/^[a-z]*$/i.test(firstName)) {
        e.preventDefault();

        return;
      }

      props.changeFirstName(firstName);
    },
    []
  );

  const handleLastNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const lastName = e.target.value;

      if (!/^[a-z]*$/i.test(lastName)) {
        e.preventDefault();

        return;
      }

      props.changeLastName(lastName);
    },
    []
  );

  useDocumentTitle(`Hello, ${props.firstName} ${props.lastName}`);

  return (
    <UserFormContainer>
      <form onSubmit={handleFormSubmit}>
        <UserFormInputBlock>
          <label htmlFor="userFirstName">First name</label>
          <UserFormInput
            id="userFirstName"
            placeholder="Enter first name..."
            value={props.firstName}
            onChange={handleFirstNameChange}
          />
        </UserFormInputBlock>

        <UserFormInputBlock>
          <label htmlFor="userLastName">Last name</label>
          <UserFormInput
            id="userLastName"
            placeholder="Enter last name..."
            value={props.lastName}
            onChange={handleLastNameChange}
          />
        </UserFormInputBlock>
      </form>
    </UserFormContainer>
  );
};

export default connect<UserState, ReduxDispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(UserForm);

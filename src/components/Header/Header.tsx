import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@ReduxStore';
import { UserState } from '@ReduxTypes/userTypes';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 0 15px 0 #b4b4b4;
  background-color: #fff;
`;

const HeaderGreeting = styled.p`
  font-style: italic;
`;

const mapStateToProps = ({ user }: RootState) => user;

type ReduxStateProps = ReturnType<typeof mapStateToProps>;

const Header: React.FunctionComponent<ReduxStateProps> = ({ firstName, lastName }): React.ReactElement => (
  <HeaderContainer>
    <HeaderGreeting>Hello, { firstName } { lastName }</HeaderGreeting>
  </HeaderContainer>
);

export default connect<UserState, {}, {}, RootState>(mapStateToProps)(Header);

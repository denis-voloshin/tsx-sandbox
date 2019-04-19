import * as React from 'react';

import { Header } from '@Components/Header';
import { UserForm } from '@Views/home/components/UserForm';

const HomePage: React.FunctionComponent<{}> = (): React.ReactElement => (
  <React.Fragment>
    <Header />
    <UserForm />
  </React.Fragment>
);

export { HomePage };

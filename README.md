# React Typescript sandbox
![](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/3a4ik/tsx-sandbox/master/package.json&label=version&query=$.version&colorB=blue)

[React](https://reactjs.org/) [Typescript](https://www.typescriptlang.org/) sandbox with helpful libraries out of the box.

Also, it includes example of using [Redux](https://redux.js.org/) and [styled-components](https://www.styled-components.com/).

## Installation
Install all required dependencies using
```
npm install
```

## Usage
`package.json` provides such commands:
- `npm run dev` - start [Webpack](https://webpack.js.org/) dev server
- `npm run build:dev` - create **development** build of `/src` folder to `/dist`
- `npm run build:prod` - create **production** build of `/src` folder to `/dist`
- `npm run serve:dev` - serve **development** build on 8080 port
- `npm run serve:prod` - serve **production** build on 8080 port

## Features
### Styles and CSS-preprocessors
Using `.css` files and CSS-preprocessors is currently unsupported. Instead, use [styled-components](https://www.styled-components.com/).

### Styled components
Sandbox has [styled-components](https://www.styled-components.com/) included.

You can write CSS inside your components, so you don't need to create `.css` file(s):
```typescript jsx
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button.attrs({
  type: 'text'
})`
  outline: none;
  background-color: ${props => (
    props.success
      ? '#0f0'
      : '#00f'
  )};
  border-radius: 5px;
  padding: 5px;
  color: #fff;
`;

export default function() {
  return (
    <ButtonContainer>
      <Button success />
      <Button />
    </ButtonContainer>
  );
}
```

### Module path aliasing
[Webpack](https://webpack.js.org/) allows you to import modules using aliases, instead of `../` hell:
```javascript
import * as userActions from '@ReduxActions/userActions';
```
For now, allowed aliases are:
- **@Components** - `/src/components`
- **@ReduxActions** - `/src/store/actions`
- **@ReduxReducers** - `/src/store/reducers`
- **@ReduxTypes** - `/src/store/types`
- **@ReduxStore** - `/src/store`
- **@Views** - `/src/views`
- **@Utils** - `/src/utils`

### Environment variables
You can set variables for your environment in `/config/env.js`, which is created from `/config/dist.env.js` template.

After that, you will be able to get these variables from `process.env`.

### Redux
Sandbox has [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) and preconfigured [Redux](https://redux.js.org/) store with basic user info - first name and last name.

You can configure your own store in `/src/store`.

### Type definitions
Type definitions for all necessary dependencies from `package.json` are also included. See [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) library for more info.

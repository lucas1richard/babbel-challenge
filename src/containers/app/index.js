import React from 'react';
import styled from 'styled-components';
import { Route, Link as LinkBase } from 'react-router-dom';
import Calculator from '../Calculator';

const Main = styled.main`
  max-width: 500px;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.primary[500]};
`;

const Link = styled(LinkBase)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
  :hover {
    background-color: ${(props) => props.theme.primary[800]};
  }
`;

const App = () => (
  <div>
    <Header>
      <Link to="/">Calculator</Link>
    </Header>

    <Main>
      <Route exact path="/" component={Calculator} />
    </Main>
  </div>
);

export default App;

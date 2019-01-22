import React from 'react';
import styled from 'styled-components';
import mapToProps from './mapToProps';

const Wrapper = styled.div`
  margin: ${(props) => props.theme.gap || '0.25rem'};
  padding: 1rem;
  height: 4rem;
  border: 1px solid black;
  border-radius: 4px;
  text-align: right;
  font-size: ${(props) => props.theme.fontSize || '2rem'};
`;

function Display({ num, displayValue }) {
  return (
    <Wrapper>
      {displayValue}
    </Wrapper>
  );
}

export default mapToProps(Display);

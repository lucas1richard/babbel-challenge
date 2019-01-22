import React from 'react';
import styled from 'styled-components';

function backgroundColor(props) {
  let ix = 50;
  if (props.active) {
    ix = 700;
  }
  return props.theme[props.color][ix];
}

function borderColor(props) {
  let ix = 500;
  if (props.active) {
    ix = 900;
  }
  return props.theme[props.color][ix];
}

function fontColor(props) {
  if (props.active) {
    return '#fff';
  }
  return props.theme[props.color][500];
}

const CalculatorButton = styled.button`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  color: ${fontColor};
  border-radius: 4px;
  width: 100%;
  height: 100%;
  font-size: ${(props) => props.theme.fontSize || '2rem'};
  text-align: center;
`;

CalculatorButton.defaultProps = {
  color: 'primary'
}

const Wrapper = styled.div`
  padding: ${(props) => props.theme.gap || '0.25rem'};
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
`;

function Button({ children, height, width, ...rest }) {
  return (
    <Wrapper height={height} width={width}>
      <CalculatorButton {...rest}>
        {children}
      </CalculatorButton>
    </Wrapper>
  );
}

Button.defaultProps = {
  height: '4rem'
};

export default Button;

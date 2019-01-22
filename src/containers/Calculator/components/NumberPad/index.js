import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Row from '../Row';
import {
  multiplication,
  division,
  addition,
  subtraction
} from '../../constants';

const numbersTop = [7,8,9];
const numbersMid = [4,5,6];
const numbersBot = [1,2,3];

const Placeholder = styled.div`
  width: 25%;
`;

const numberBtnProps = {
  width: '25%',
  color: 'primary'
};

const opBtnProps = {
  width: '25%',
  color: 'secondary'
};

function NumberPad({ saveMemory, updateValue, operation }) {
  function numClick(number) {
    return () => updateValue(number, 'currentValue');
  }
  return (
    <div>
      <Row>
          {numbersTop.map((number) => (
            <Button {...numberBtnProps} key={number} onClick={numClick(number)}>
              {number}
            </Button>
          ))}
          <Button {...opBtnProps} onClick={() => operation(division)}>
            &divide;
          </Button>
        </Row>
        <Row>
          {numbersMid.map((number) => (
            <Button {...numberBtnProps} key={number} onClick={numClick(number)}>
              {number}
            </Button>
          ))}
          <Button {...opBtnProps} onClick={() => operation(multiplication)}>
            &times;
          </Button>
        </Row>
        <Row>
          {numbersBot.map((number) => (
            <Button {...numberBtnProps} key={number} onClick={numClick(number)}>
              {number}
            </Button>
          ))}
          <Button {...opBtnProps} onClick={() => operation(subtraction)}>
            &minus;
          </Button>
        </Row>
        <Row>
          <Placeholder />
          <Button {...numberBtnProps} onClick={numClick(0)}>0</Button>
          <Placeholder />
          <Button {...opBtnProps} onClick={() => operation(addition)}>
            &#43;
          </Button>
        </Row>
    </div>
  );
}

export default NumberPad;

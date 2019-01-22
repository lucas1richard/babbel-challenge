import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import NumberPad from './components/NumberPad';
import Row from './components/Row';
import Display from './containers/Display';
import mapToProps from './mapToProps';
import calculatorTheme from './theme';

const Wrapper = styled.div`
  margin: 0rem ${(props) => props.theme.gap};
`;

export function Calculator(props) {
  const {
    memory,
    saveMemory,
    updateValue,
    operation,
    equals,
    reset,
    restoreMemory
  } = props;

  return (
    <ThemeProvider theme={calculatorTheme}>
      <Wrapper>
        <Display num={memory} />
        <Row>
          <Button active={memory} width="25%" color="secondary" onClick={saveMemory}>
            MS
          </Button>
          <Button active={memory} width="25%" color="secondary" onClick={restoreMemory}>
            MR
          </Button>
          <Button width="25%" color="secondary" onClick={reset}>
            C
          </Button>
        </Row>
        <NumberPad
          saveMemory={saveMemory}
          updateValue={updateValue}
          operation={operation}
        />
        <div>
          <Button color="secondary" width="100%" onClick={equals}>
            &#61;
          </Button>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default mapToProps(Calculator);

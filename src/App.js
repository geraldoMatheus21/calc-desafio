import {Container, Content, Row, Column} from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [displayExpression, setDisplayExpression] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForNewValue) {
      setDisplayValue(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(num) : displayValue + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplayValue('0.');
      setWaitingForNewValue(false);
    } else if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperation = (op) => {
    const currentValue = parseFloat(displayValue);
    
    if (previousValue === null) {
      setPreviousValue(currentValue);
      setDisplayExpression(displayValue + ' ' + op + ' ');
    } else if (operation) {
      const result = performCalculation(previousValue, currentValue, operation);
      setDisplayValue(String(result));
      setPreviousValue(result);
      setDisplayExpression(result + ' ' + op + ' ');
    }
    
    setOperation(op);
    setWaitingForNewValue(true);
  };

  const performCalculation = (prev, current, op) => {
    switch(op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case 'x':
        return prev * current;
      case '/':
        return prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(displayValue);
      const result = performCalculation(previousValue, currentValue, operation);
      setDisplayValue(String(result));
      setDisplayExpression(displayExpression + displayValue + ' = ' + result);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setDisplayExpression('');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  return (
    <Container>
      <Content>
        <Input value={displayValue} expression={displayExpression} />
        <Row>
          <Button label="7" onClick={() => handleNumberClick(7)}/>
          <Button label="8" onClick={() => handleNumberClick(8)}/>
          <Button label="9" onClick={() => handleNumberClick(9)}/>
          <Button label="/" onClick={() => handleOperation('/')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleNumberClick(4)}/>
          <Button label="5" onClick={() => handleNumberClick(5)}/>
          <Button label="6" onClick={() => handleNumberClick(6)}/>
          <Button label="x" onClick={() => handleOperation('x')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleNumberClick(1)}/>
          <Button label="2" onClick={() => handleNumberClick(2)}/>
          <Button label="3" onClick={() => handleNumberClick(3)}/>
          <Button label="-" onClick={() => handleOperation('-')}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleNumberClick(0)}/>
          <Button label="." onClick={handleDecimal}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="+" onClick={() => handleOperation('+')}/>
        </Row>
        <Row>
          <Button label="C" onClick={handleClear}/>
        </Row>

      </Content>
    </Container>
  );
}

export default App;

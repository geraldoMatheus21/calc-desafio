import { InputContainer } from './styles';

const Input = ({ value, expression }) => {
  return (
    <InputContainer>
        <div style={{ fontSize: '12px', color: '#666', minHeight: '20px' }}>
          {expression}
        </div>
        <input type="text" value={value} readOnly style={{ fontSize: '24px', fontWeight: 'bold' }} />
    </InputContainer>
  );
}

export default Input;
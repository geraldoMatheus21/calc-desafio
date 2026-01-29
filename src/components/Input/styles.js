import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAFFAA;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 45px;
        background-color: #AAFFAA;
        display: block;
        direction: ltr;
        border: none;
        outline: none;

        font-size: 24px;
        font-family: 'Roboto';
        padding: 0 10px;
        box-sizing: border-box;
    }
`
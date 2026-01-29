import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 320px;
    min-height: 350px;
`

export const Row = styled.div`
    display: flex;
    flexdirection: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
`

export const Column = styled.div`
    display: flex;
    flexdirection: column;
    justify-content: sapce-between;
    align-items: center;
`
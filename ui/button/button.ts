import styled from "styled-components"

export const Button = styled.button`
    background-color: aliceblue;
    width: 100px;
    height: 80px;
    border: none;
    outline: none;
`
export const SecondaryButton = styled(Button)`
    background-color: beige;
`

export const OutlinedButton = styled(Button)`
    outline: auto;
`

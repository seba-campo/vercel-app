import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    font-family: 'Inter', sans-serif;

    .title{
        font-size: 38px;
        font-weight: 700;
        word-wrap: break-word;
    }

    @media (max-width: 481px){
    .title{
        font-size: 20px;
    }
    }

    .search{
        margin-top: 1rem
    }
`

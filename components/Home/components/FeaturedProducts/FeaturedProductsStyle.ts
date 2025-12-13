import styled from "styled-components";

export const FeaturedProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #91E5F6;
    height: 500px;
    font-family: 'Inter', sans-serif;

    .title{
        font-size: 32px;
        font-weight: 700;
        word-wrap: break-word;
    }

    @media (max-width: 481px){
        .title{
            color: #FFF
        }
    }
`

export const FeaturedProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
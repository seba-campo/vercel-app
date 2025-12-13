import styled from "styled-components";

export const FeaturedProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #91E5F6;
    height: fit-content;
    font-family: 'Inter', sans-serif;
    padding-bottom: 60px;

    .title{
        margin: 150px 0 40px 0;
        font-size: 32px;
        font-weight: 700;
        word-wrap: break-word;
    }

    @media (max-width: 481px){
        background-color: #E75A7C; 

        .title{
            color: #FFF;
            margin: 60px 0 25px 0;
        }
    }
`

export const FeaturedProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
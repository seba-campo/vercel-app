import styled from "styled-components";

const ProfileWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Inter', sans-serif;

    .profile{
        font-size: 38px;
        font-weight: 700;
        word-wrap: break-word;
    }

    @media (max-width: 481px){
    .title{
        font-size: 20px;
    }
    }

    h1{
        font-size: 32px;
        margin-bottom: 1rem
    }

    label{
        display: block;
        font-size: 12px;
        margin-bottom: 0.5rem
    }

    input{
        width: 100%;
        padding: 0.5rem
    }
`

export default ProfileWrapper

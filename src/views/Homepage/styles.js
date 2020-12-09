import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    height: 100vh;
    padding: 50px;
    background-color: #74EAAE;

    ul{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 16px;

        li{
            margin-top: 10px;
        }
    }

    input{
        width: 300px;
        border: none;
        border-radius: 5px;
        padding: 10px 10px 10px 15px;
    }

    button{
        width: 150px;
        padding: 10px 20px;
        background-color: #448363;
        color: #FFF;
        margin-top: 10px;
        border: none;
    }
`;

const float = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-30px);
    }
    100% {
        transform: translatey(0px);
    }
`;

export const Logomarca = styled.img`
    width: 200px;
    height: auto;
    transition: 0.5s all;
    cursor: pointer;
    transform: translatey(0px);
    animation: 2s ${float} ease-in-out infinite;
`;

export const Version = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    span{
        font-size: 16px;
        color: #448363;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    
    span{
        color: #FFF;
        font-size: 12px;
    }

    .title{
        font-size: 50px;
        font-weight: 600;
        color: #448363;

        b{
            color: #FFF;
        }
    }
`;

export const Icons = styled.div`
    margin-top: 150px;
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 40px;
    
    .icon{
        cursor: pointer;
        margin: 30px;
    }
`;

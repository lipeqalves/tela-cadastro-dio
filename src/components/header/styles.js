import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 47px;
    background-color: #151515;
    display:flex;
    align-items: center;
    justify-content: space-between;
    
    img{
        margin: 0 40px;
    }

    ul{
        width: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 40px;
    }
    

    .texto-home{
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        font-style: normal;

        color: #FFFFFF;
    }
`
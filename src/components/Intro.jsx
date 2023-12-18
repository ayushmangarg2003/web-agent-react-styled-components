import React from 'react'
import styled from 'styled-components'
import Animation from "./Animation";
import WomenPng from "../img/women.webp"

const Container = styled.div`
    height : calc(100vh - 50px);
    display : flex;
    @media only screen and (max-width: 880px) {
        flex-direction: column;
        align-items: center;
    }
`
const Left = styled.div`
    width : 65%;
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content : center;
    @media only screen and (max-width: 880px) {
        width: 90%;
        text-align:center;
        height: 100%;
    }
`
const Title = styled.h1`
    width  : 70%;
    font-size: 65px;
    font-weight: 900;
    @media only screen and (max-width: 1150px) {
        font-size: 50px;
    }
    @media only screen and (max-width: 880px) {
        width: 100%;
        font-size: 50px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 40px;
    }
`
const Description = styled.p`
    width  : 70%;
    font-size : 32px;
    margin-top : 20px;
    @media only screen and (max-width: 1150px) {
        font-size: 28px;
    }
    @media only screen and (max-width: 880px) {
        width: 100%;
    }
    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size:24px
    }
`
const Info = styled.div`
    display : flex;
    width : 70%;
    gap : 30px;
    padding : 20px;
    @media only screen and (max-width: 880px) {
        width: 100%;
        flex-direction: column;
        align-items:center;
    }
`
const Button = styled.button`
    padding  : 10px 20px;
    font-size: 20px;
    background-color:crimson;
    color:white;
    border : 2px solid white;
    border-radius:8px;
    font-weight:bold; 
    cursor:pointer;
    @media only screen and (max-width: 880px) {
        margin-bottom: 20px;
        width : 200px;
      }
`
const Right = styled.div`
    width : 35%;
    overflow : hidden;
    display : flex;
    justify-content : center;
    align-items: center;
    @media only screen and (max-width: 880px) {
        display: none;
    }
`
const Img = styled.img`
    width : 100%;
`

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Elevating your online presence, one click at a time</Title>
                <Description>Designing and developing innovative web experiences that drive growth, engage your audience and create a lasting impact.</Description>
                <Info>
                    <Button>Embark on a new venture</Button>
                </Info>
            </Left>
            <Right>
                <Img src={WomenPng} />
            </Right>
            <Animation />
        </Container>
    )
}

export default Intro

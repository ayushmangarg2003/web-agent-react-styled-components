import React from 'react'
import styled from 'styled-components'
import APP from '../img/app.webp'
import Animation from './Animation';

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 880px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 880px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 880px) {
    width: 100%;
  }
`;
const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 1150px) {
    font-size: 50px;
}
  @media only screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Description = styled.p`
  font-size: 20px;
  color: #777;
  width:90%;
  margin-top: 30px;
  @media only screen and (max-width: 880px) {
    color:#fff;
  }
  @media only screen and (max-width: 480px) {
    font-size:18px;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  width : 200px;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  font-weight : bold;
  margin-top: 20px;
  cursor: pointer;
`;

const IMG = styled.img`
    width : 98.2%;
`

const Feature = () => {
  return (
    <Container>
      <Left><IMG src={APP}></IMG></Left>
      <Right>
        <Title>
          Design <b>smart</b>,<br /> Business <b>smart</b>
        </Title>
        <SubTitle>
          Leveraging design for optimal business performance
        </SubTitle>
        <Description>
          At our company, we empower our clients to excel by crafting compelling brand identities, designing engaging digital experiences, and producing visually striking print materials that effectively convey their message, align with their marketing objectives, and leave a lasting impression
        </Description>
        <Button>Lets Get Started</Button>
      </Right>
      <Animation />
    </Container>
  )
}

export default Feature

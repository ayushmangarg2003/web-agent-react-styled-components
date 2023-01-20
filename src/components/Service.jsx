import React, { useState } from "react";
import styled from "styled-components";
import How from "../img/how.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import Animation from "./Animation";


const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 880px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 880px) {
    display: none;
  }
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  width: 100%;
  margin-left: 100px;
`;
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 880px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  @media only screen and (max-width: 880px) {
    width: 100%;
    height:100vh;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items:center;
  @media only screen and (max-width: 880px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
@media only screen and (max-width: 480px) {
  text-align:center;
}`;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #f6f6f6;
  @media only screen and (max-width: 880px) {
    color: #222;
    text-align:center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  width:100%;
  justify-content: space-evenly;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {    
    justify-content: center;
    gap:5px;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  width : 200px;
  padding: 15px 20px;
  background-color: crimson;
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  font-weight : bold;
  margin-top: 20px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
          Our company offers digital services to startups and small businesses seeking a partner for their digital media, design, development, lead generation, and communication needs. We collaborate with you to achieve your goals, not just work for you. We have a wealth of resources at our disposal
          </Desc>
          <CardContainer>
            <MiniCard text = "Web Services"/>
            <MiniCard text = "App Services"/>
            <MiniCard text = "Progressive Web Apps"/>
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            Play Tutorial
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
      <Animation/>
    </Container>
  )
}

export default Service

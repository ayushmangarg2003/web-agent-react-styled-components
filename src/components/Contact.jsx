import React from "react";
import styled from "styled-components";
import Animation from "./Animation";

const Container = styled.div`
  height: 90%;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction:column;
  align-items: center;

  @media only screen and (max-width: 880px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  text-align:center;
  @media only screen and (max-width: 880px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 880px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 880px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 300px;
  padding: 20px;
  @media only screen and (max-width: 880px) {
    padding: 5px;
    width:275px;
  }
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 880px) {
    padding: 5px;
    margin-top: 20px;
    width:275px
  }
`;

const Button = styled.button`
padding  : 10px 20px;
font-size: 20px;
background-color:crimson;
color:white;
border : 2px solid white;
border-radius:8px;
font-weight:bold; 
cursor:pointer;
@media only screen and (max-width: 880px){
    font-size: 12px;
    margin-top: 20px;
}
`;


const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
              Any Query? Contact us
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
      </Wrapper>
      <Animation/>
    </Container>
  );
};

export default Contact;
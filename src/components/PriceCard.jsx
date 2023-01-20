import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 5px 10px #DC143C4a;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 880px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 880px) {
    font-size: 30px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 880px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
  text-align:center;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 880px) {
    margin: 10px;
    font-size: 12px;
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
}
`;

const PriceCard = (props) => {
    return (
        <Container>
            <PriceContainer>
                <Price>{props.price}</Price>₹/month
            </PriceContainer>
            <Type>{props.type}</Type>
            <List>
                <ListItem>{props.price} Templates to Choose from</ListItem>
                <ListItem>{props.type} Support</ListItem>
                <ListItem>Fastest Service</ListItem>
                <ListItem>100+ PreBuilt Websites</ListItem>
            </List>
            <Button>Join Now</Button>
        </Container>
    );
};

export default PriceCard;
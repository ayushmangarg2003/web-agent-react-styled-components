import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 50px;
`;

const Wrapper = styled.div`
    padding : 20px 30px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const Left = styled.div`
    width : 70%;
    display :flex;
    align-items : center;
    justify-content: space-between;
`
const Logo = styled.h1`
font-size: 40px;
font-weight : bold;
text-decoration : underline crimson;
`
const Menu = styled.ul`
    display :flex;
    gap : 30px;
    @media only screen and (max-width: 1150px) {
        gap:10px;
    }
    @media only screen and (max-width: 880px) {
        display: none;
    }
`
const MenuItem = styled.li`
    list-style-type : none;
    font-size: 24px;
    font-weight: bold;
    @media only screen and (max-width: 1100px) {
        font-size: 18px;
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
    @media only screen and (max-width: 480px){
        font-size: 12px;
    }
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>WebAgent</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>Sign Up</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar

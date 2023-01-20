import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:10%;
background:#050505;
display:flex;
justify-content:center;
align-items:center;
`
const Copyright = styled.span`
font-weight: bold;
color:#f6f6f6;
font-size:22px;
@media only screen and (max-width: 480px) {
  font-size: 14px;
}
`

const Footer = () => {
  return (
    <Container>
      <Copyright> Copyright © All Rights Reserved</Copyright>
    </Container>
  )
}

export default Footer

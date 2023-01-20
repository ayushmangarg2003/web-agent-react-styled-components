import styled from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const IntroBG = styled.div`
  clip-path: polygon(39% 0, 100% 0%, 100% 40%, 55% 100%);
  background-color: crimson;
  z-index: -100;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (max-width: 880px) {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
`;
const FeatureBG = styled.div`
  clip-path: polygon(0 0, 55% 0, 39% 100%, 0% 100%);
  background-color: crimson;
  z-index: -100;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (max-width: 880px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    z-index: -102;
  }
`;
const ServiceBG = styled.div`
  clip-path: polygon(39% 0, 100% 0%, 100% 90%, 50% 90%);
  background-color: crimson;
  z-index: -100;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (max-width: 880px) {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
`;
const PriceBG = styled.div`
clip-path: polygon(75% 10%, 100% 50%, 75% 90%, 0% 90%, 25% 50%, 0% 10%);  background-color: crimson;
  z-index: -100;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (max-width: 880px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    z-index: -102;
  }`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroBG />
      </Container>

      <Container>
        <Feature />
        <FeatureBG />
      </Container>

      <Container>
        <Service />
        <ServiceBG />
      </Container>

      <Container>
        <Price />
        <PriceBG/>
      </Container>

      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;

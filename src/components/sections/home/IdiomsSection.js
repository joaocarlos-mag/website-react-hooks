import React from "react";
import { Caption2, H2, MediumText } from "../../styles/TextStyles";

import styled from "styled-components";
import Idioms from "../../buttons/IdiomsButton";
import LearnMoreButton from "../../buttons/LearnMoreButton";

function IdiomsSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <SmallTitle>Idioms</SmallTitle>
          <Title>Hello | Hola | Salut</Title>
          <Description>
            Get to know my opinion about foreign languages and learn more about
            my hobby!
          </Description>
          <LearnMoreButton />
        </TextWrapper>
        {/* <IdiomsWrapper> */}
        <Idioms subtitle="English" src="/images/icons/english.svg" />
        <Idioms subtitle="Español" src="/images/icons/español.svg" />
        <Idioms subtitle="Français" src="/images/icons/français.svg" />
        {/* </IdiomsWrapper> */}
      </ContentWrapper>
    </Wrapper>
  );
}

export default IdiomsSection;

const Wrapper = styled.div`
  align-items: center;
  overflow: hidden;
  padding-bottom: 50px;
  gap: 600px;

  // Wrapper is the background
`;
const ContentWrapper = styled.div`
  // ContentWrapper is the content area

  max-width: 1234px;
  margin: 0 auto; // center in the screen
  padding-top: 80px;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  align-content: center;
  gap: 60px;

  /* @media (max-width: 800px) {
    // Adaptive Layout
    grid-template-columns: 1fr;
    gap: 100px;
    margin: 0 auto;
    align-items: center;
  } */

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 30px;
  }
`;
const TextWrapper = styled.div`
  // TextWrapper is the text area

  max-width: 360px;
  display: grid;
  gap: 30px;
  padding-bottom: 50px;
`;

// const IdiomsWrapper = styled.div`
//   display: grid;
//   max-width: 900px;
//   grid-template-columns: auto auto auto;
//   gap: 50px;

//   @media (max-width: 550px) {
//     grid-template-columns: 1fr;
//     justify-items: center;
//     padding-top: 40px;
//     gap: 5px;
//   }
// `;

const Title = styled(H2)`
  // This is a color variable calling ColorStyles
  color: linear-gradient(180deg, #730040 0%, #301cbe 100%); ;
`;

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
  opacity: 0.7;
`;
const SmallTitle = styled(Caption2)`
  line-height: 50%;
`;

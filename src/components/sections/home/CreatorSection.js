import React from "react";
import styled from "styled-components";
import { CreatorWaves } from "../../backgrounds/CreatorWaves";
import HandBook from "../../buttons/Handbook";
import LearnMoreButton from "../../buttons/LearnMoreButton";
import { Caption2, H2, MediumText } from "../../styles/TextStyles";

export default function CreatorSection() {
  return (
    <Wrapper>
      <CreatorWaves />
      <ContentWrapper>
        <TextWrapper>
          <SmallTitle>AUDIOVISUAL</SmallTitle>
          <Title>
            Lights, camera, <br />
            action!
          </Title>
          <Description>
            Meet my work as a content creator and enrich your knowledge!
          </Description>
          <LearnMoreButton />
        </TextWrapper>
        {/* <HandBookWrapper> */}
        <HandBook
          src="/images/icons/handbook/handbookRed.svg"
          title="How to become productive"
          subtitle="Discover effective techniques I use to study better"
          pdf="Study better"
        />
        <HandBook
          src="/images/icons/handbook/handbookBlue.svg"
          title="Programming techniques"
          subtitle="Tips for beginners in programming to learn computing faster"
          pdf="Learning to think"
        />
        {/* </HandBookWrapper> */}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  overflow: hidden;
  padding-top: 0px;
  // Wrapper is the background
`;

const ContentWrapper = styled.div`
  // ContentWrapper is the content area
  max-width: 1234px;
  margin: 0 auto; // center in the screen
  padding-top: 250px;
  padding-right: 30px;
  padding-bottom: 100px;
  padding-left: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  align-content: center;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
  }
`;

const TextWrapper = styled.div`
  // TextWrapper is the text area
  max-width: 360px;
  display: grid;
  gap: 30px;
  padding-bottom: 25px;
`;

// const HandBookWrapper = styled.div`
//   display: grid;
//   max-width: 900px;
//   grid-template-columns: auto auto;
//   gap: 50px;

//   @media (max-width: 700px) {
//     grid-template-columns: 1fr;
//     gap: 0px;
//   }
// `;

const Title = styled(H2)`
  // This is a color variable calling ColorStyles
  color: linear-gradient(180deg, #730040 0%, #301cbe 100%); ;
`;

const SmallTitle = styled(Caption2)`
  line-height: 30%;
`;

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
  opacity: 0.7;
`;

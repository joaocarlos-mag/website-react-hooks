import React from "react";
import styled from "styled-components";
import { H1, H2, MediumText, BodyMain, BodyIntro } from "../styles/TextStyles";

export default function TextSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>WWDC22</Title>
          <Text>
            When Apple’s 2021 Worldwide Developers Conference convenes for its
            third year in an all-virtual format, a very special group of young
            people — 350 Swift Student Challenge winners from 35 different
            countries and regions — will be among the millions of global
            attendees.
          </Text>
          <Text>
            The winners were selected as part of Apple’s annual WWDC student
            challenge, each demonstrating their coding and problem-solving
            skills by submitting an original Swift playground to earn a spot.
          </Text>
          <Text>
            “Every year, we are inspired by the talent and ingenuity that we see
            from our Swift Student Challenge applicants,” said Susan Prescott,
            Apple’s vice president of Worldwide Developer Relations and
            Enterprise and Education Marketing. “This year, we are incredibly
            proud that more young women applied and won than ever before, and we
            are committed to doing everything we can to nurture this progress
            and reach true gender parity.”
          </Text>

          <ImageContainer src="/images/illustrations/mac-ipad-iphone.png" />

          <Title>Call to code.</Title>
          <Text>
            When Apple’s 2021 Worldwide Developers Conference convenes for its
            third year in an all-virtual format, a very special group of young
            people — 350 Swift Student Challenge winners from 35 different
            countries and regions — will be among the millions of global
            attendees.
          </Text>
          <Text>
            The winners were selected as part of Apple’s annual WWDC student
            challenge, each demonstrating their coding and problem-solving
            skills by submitting an original Swift playground to earn a spot.
          </Text>
          <Text>
            “Every year, we are inspired by the talent and ingenuity that we see
            from our Swift Student Challenge applicants,” said Susan Prescott,
            Apple’s vice president of Worldwide Developer Relations and
            Enterprise and Education Marketing. “This year, we are incredibly
            proud that more young women applied and won than ever before, and we
            are committed to doing everything we can to nurture this progress
            and reach true gender parity.”
          </Text>
        </TextWrapper>
      </ContentWrapper>
      <VideoWrapper>
        <SloganWrapper>
          <Slogan>Think Different</Slogan>
        </SloganWrapper>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/illustrations/iPadAir.jpeg"
          style={{
            right: "0",
            bottom: "0",
            width: "100%",
            height: "auto",
          }}
        >
          <source src="/videos/iPad.mp4" type="video/mp4" />
        </video>
      </VideoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding-bottom: 30px;
  padding-right: 30px;
  height: 100%;
  padding-left: 30px;
  display: grid;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const Title = styled(H2)`
  color: white;
  line-height: 70px;
  text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const Slogan = styled(H1)`
  color: white;
  line-height: 70px;
  text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const Text = styled(BodyMain)`
  color: white;
  text-shadow: -3px 0px 5px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const ImageContainer = styled.img`
  padding-top: 30px;
  width: 100%;
  height: auto;
`;

const VideoWrapper = styled.div`
  margin: 0 auto;

  display: flex;
  overflow: hidden;
`;

const SloganWrapper = styled.div`
  /* margin: 0 auto;
  align-self: center;
  text-align: center;
  z-index: 3;
  position: absolute;
  background-color: red; */
  margin: 0 auto;
  align-self: center;
  text-align: center;
  position: absolute;
  justify-content: center;
  padding-right: 30px;
  padding-left: 30px;
  width: 100%;
`;
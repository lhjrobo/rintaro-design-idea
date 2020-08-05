import React from "react";
import styled from "@emotion/styled";
import { iphoneWidth } from "../assets/rules";
interface Props {
  content: {
    img: string[];
    titleJP: string;
    titleEN: string;
    MessageJP: string;
    MessageEN: string;
  };
}

const ContentCard: React.FC<Props> = ({ content }) => {
  if (content.img.length === 0) {
    if (content.titleJP === "") {
      return (
        <Wrapper>
          <Wrapper2>
            <TitleEN>{content.titleEN}</TitleEN>
            <CaptionJP>{content.MessageJP}</CaptionJP>
          </Wrapper2>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Wrapper2>
            <TitleJP>{content.titleJP}</TitleJP>
            <TitleEN>-{content.titleEN}-</TitleEN>
            <CaptionJP>{content.MessageJP}</CaptionJP>
          </Wrapper2>
        </Wrapper>
      );
    }
  } else {
    if (content.titleJP === "") {
      return (
        <Wrapper>
          {content.img.map((singleimg) => {
            return <ContentImg key={singleimg} src={singleimg} />;
          })}
          <Wrapper2>
            <TitleEN>{content.titleEN}</TitleEN>
            <CaptionJP>{content.MessageJP}</CaptionJP>
          </Wrapper2>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          {content.img.map((singleimg) => {
            return <ContentImg key={singleimg} src={singleimg} />;
          })}
          <Wrapper2>
            <TitleJP>{content.titleJP}</TitleJP>
            <TitleEN>-{content.titleEN}-</TitleEN>
            <CaptionJP>{content.MessageJP}</CaptionJP>
          </Wrapper2>
        </Wrapper>
      );
    }
  }
};

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
const Wrapper2 = styled.div`
  margin: 10% 5% 5% 5%;
  color: white;
`;
const ContentImg = styled.img`
  width: ${iphoneWidth}px;
  height: ${(iphoneWidth * 2) / 3}px;
  margin: 0 auto 20px auto;
`;
const TitleJP = styled.div`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;
const TitleEN = styled.div`
  font-size: 1.4rem;
  margin-bottom: 30px;
`;
const CaptionJP = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-kerning: 1.2rem;
  margin-bottom: 10px;
`;
export default ContentCard;

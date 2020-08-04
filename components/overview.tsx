import React from "react";
import styled from "@emotion/styled";
import { iphoneWidth } from "../assets/rules";
interface Props {
  thumb: string;
  titleEN: string;
  titleJP: string;
  overview: {
    overViewCaptionJP: string;
    overViewCaptionEN: string;
    overViewCreditJP: string;
    overViewCreditEN: string;
  };
}
const Overview: React.FC<Props> = ({ thumb, titleEN, titleJP, overview }) => {
  return (
    <Wrapper>
      <ThumbImg src={thumb} />
      <Wrapper2>
        <TitleJP>{titleJP}</TitleJP>
        <TitleEN>-{titleEN}-</TitleEN>
        <Caption>{overview.overViewCaptionJP}</Caption>
        <Credit>{overview.overViewCreditJP}</Credit>
      </Wrapper2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  width: ${iphoneWidth}px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ThumbImg = styled.img`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
`;

const Wrapper2 = styled.div`
  margin: 20% 5% 5% 5%;
  color: white;
`;

const TitleJP = styled.div`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;
const TitleEN = styled.div`
  font-size: 1.4rem;
  margin-bottom: 30px;
`;
const Caption = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-kerning: 1.2rem;
  margin-bottom: 10px;
`;
const Credit = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-kerning: 1.2rem;
  margin-bottom: 10px;
  white-space: pre-line;
`;

export default Overview;

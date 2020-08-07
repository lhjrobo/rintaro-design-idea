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
  const [thumbWidth, setThumbWidth] = React.useState(iphoneWidth);
  React.useEffect(() => {
    if (window !== undefined) {
      if (iphoneWidth >= window.innerWidth) {
        setThumbWidth(window.innerWidth);
      } else {
        setThumbWidth(iphoneWidth);
      }
    }
  }, []);
  if (titleJP === "") {
    return (
      <Wrapper>
        <ThumbImg
          src={thumb}
          style={{ width: `${thumbWidth}px`, height: `${thumbWidth}px` }}
        />
        <Wrapper2>
          <TitleEN>{titleEN}</TitleEN>
          <Caption>{overview.overViewCaptionJP}</Caption>
          <Credit>{overview.overViewCreditJP}</Credit>
        </Wrapper2>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ThumbImg
          src={thumb}
          style={{ width: `${thumbWidth}px`, height: `${thumbWidth}px` }}
        />
        <Wrapper2>
          <TitleJP>{titleJP}</TitleJP>
          <TitleEN>-{titleEN}-</TitleEN>
          <Caption>{overview.overViewCaptionJP}</Caption>
          <Credit>{overview.overViewCreditJP}</Credit>
        </Wrapper2>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  padding-top: 134px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const ThumbImg = styled.img`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  margin: 0 auto 0 auto;
`;

const Wrapper2 = styled.div`
  margin: 10% 5% 5% 5%;
  color: white;
  word-break: keep-all;
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
  word-break: normal;
`;
const Credit = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-kerning: 1.2rem;
  margin-bottom: 10px;
  white-space: pre-line;
`;

export default Overview;

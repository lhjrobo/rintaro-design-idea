import React from "react";
import styled from "@emotion/styled";
import { iphoneWidth } from "../assets/rules";
import WorkPage from "./workpage";
interface Props {
  imgsrc: string;
  titleJP: string;
  titleEN: string;
  author: string;
  scrollState: [string, React.Dispatch<React.SetStateAction<string>>];
  selectedState: [string, React.Dispatch<React.SetStateAction<string>>];
  overview: {
    overViewCaptionJP: string;
    overViewCaptionEN: string;
    overViewCreditJP: string;
    overViewCreditEN: string;
  };
  contents: {
    img: string[];
    titleJP: string;
    titleEN: string;
    MessageJP: string;
    MessageEN: string;
  }[];
}

const ThumbnailComponent: React.FC<Props> = ({
  imgsrc,
  author,
  titleEN,
  titleJP,
  //scrollState: [scroll, setScroll],
  selectedState: [selected, setSelected],
  overview,
  contents,
}) => {
  const [focus, setFocus] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (focus === 0) {
      setFocus(1);
      setSelected(author);
    } else {
      setOpen(true);
    }
    console.log(scroll);
  };
  /*React.useEffect(() => {
    if (open === true) {
      setScroll("hidden");
    } else {
      setScroll("visible");
      setFocus(0);
    }
  }, [open]);*/
  React.useEffect(() => {
    if (author !== selected) {
      setFocus(0);
    }
  }, [selected]);
  return (
    <>
      <Wrapper onClick={handleClick}>
        <ThumbBlur src={imgsrc} style={{ opacity: focus }} />
        <TitleWrapper style={{ opacity: focus }}>
          <Title>
            <div>{titleJP}</div>
            <div>{titleEN}</div>
          </Title>
        </TitleWrapper>
        <Thumb src={imgsrc} />
        <SmokeGlass style={{ opacity: focus * 0.5 }} />
      </Wrapper>
      <WorkPage
        openState={[open, setOpen]}
        thumb={imgsrc}
        titleEN={titleEN}
        titleJP={titleJP}
        overview={overview}
        contents={contents}
      />
    </>
  );
};

const Thumb = styled.img`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  position: absolute;
  z-index: 1;
`;
const ThumbBlur = styled.img`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  position: absolute;
  filter: blur(5px);
  z-index: 2;
`;
const Wrapper = styled.div`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  overflow: hidden;
  margin-bottom: 81px;
  position: relative;
  z-index: 3;
`;

const TitleWrapper = styled.div`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  position: absolute;
  z-index: 5;
  display: flex;
  font-size: 2rem;
  color: white;
  align-items: center;
`;
const Title = styled.div`
  margin-left: 10%;
`;
const SmokeGlass = styled.div`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  position: absolute;
  z-index: 4;
  background-color: black;
`;

export default ThumbnailComponent;

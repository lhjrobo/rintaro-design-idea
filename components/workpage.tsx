import React from "react";
import styled from "@emotion/styled";
import { backgroundColor, iphoneWidth } from "../assets/rules";
import { useSpring, animated, interpolate } from "react-spring";
import Comment from "./comment";
import Overview from "./overview";
import ContentCard from "./contentcard";
import thumbs from "../assets/thumbs";
const logoWhite = require("../image/logo_white.png");
interface Props {
  author: string;
  authorlist: string[];
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  selectedState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const WorkPage: React.FC<Props> = ({
  author,
  authorlist,
  openState: [open, setOpen],
  selectedState: [, setSelected],
}) => {
  const { s } = useSpring({ s: open ? 1 : 0, config: { tension: 350 } });
  const handleClose = () => {
    setOpen(false);
  };
  const [openTrig, setOpenTrig] = React.useState(false);
  const [expandTrig, setExpandTrig] = React.useState(false);
  const [nextWork, setNextWork] = React.useState("Heejun");
  React.useEffect(() => {
    let i: number = authorlist.indexOf(author);
    if (i < authorlist.length) {
      i = i + 1;
    } else {
      i = 0;
    }
    setNextWork(authorlist[i]);
    console.log(nextWork);
  }, [author]);
  const handleClickNext = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSelected(nextWork);
    const target = document.getElementById("Wrapper");
    if (target !== null) {
      target.scrollTo(0, 0);
    }
  };
  return (
    <Body
      style={{
        transform: interpolate([s], (s) => `scale(${s})`),
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (expandTrig === false) {
          setOpenTrig(false);
        }
      }}
    >
      <ToolBar>
        <LogoImg src={logoWhite} />
        <ExitButton onClick={handleClose}>×</ExitButton>
      </ToolBar>
      <Wrapper id={"Wrapper"}>
        <Overview
          overview={thumbs.get(author).overview}
          thumb={thumbs.get(author).src}
          titleEN={thumbs.get(author).titleEN}
          titleJP={thumbs.get(author).titleJP}
        />
        {thumbs
          .get(author)
          .contents.map(
            (content: {
              img: string[];
              titleJP: string;
              titleEN: string;
              MessageJP: string;
              MessageEN: string;
            }) => {
              return <ContentCard key={content.titleJP} content={content} />;
            }
          )}
        <NextWorkWrapper onClick={handleClickNext}>
          <NextWorkText>Next</NextWorkText>
          <NextWorkImgWrapper>
            <NextWorkImage src={thumbs.get(nextWork).src} />
          </NextWorkImgWrapper>
        </NextWorkWrapper>
      </Wrapper>

      <Comment
        openState={[openTrig, setOpenTrig]}
        expandState={[expandTrig, setExpandTrig]}
      />
    </Body>
  );
};

const Body = animated(styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${backgroundColor};
  width: 100%;
  opacity: 1;
  z-index: 10;
`);
const ToolBar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 51px;
  background-color: #000000;
`;
const LogoImg = styled.img`
  height: 90px;
  margin-left: 12px;
`;
const ExitButton = styled.div`
  margin-right: 12px;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 114px;
  bottom: 42px;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NextWorkWrapper = styled.div`
  width: ${iphoneWidth * 0.7}px;
  height: 200px;
  background-color: black;
  margin-top: 200px;
`;
const NextWorkText = styled.div`
  font-size: 1rem;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const NextWorkImage = styled.img`
  width: ${iphoneWidth * 0.7}px;
  height: ${iphoneWidth * 0.7}px;
`;
const NextWorkImgWrapper = styled.div`
  width: ${iphoneWidth * 0.7}px;
  height: ${iphoneWidth * 0.7 - 200}px;
  overflow: hidden;
`;
export default WorkPage;

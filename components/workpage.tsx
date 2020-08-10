import React from "react";
import styled from "@emotion/styled";
import { backgroundColor, iphoneWidth } from "../assets/rules";
import { useSpring, animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import Comment from "./comment";
import Overview from "./overview";
import ContentCard from "./contentcard";
import thumbs from "../assets/thumbs";
const logoWhite = require("../image/logo_white.png");
const V_THRESHOLD = 0.7;
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
  const [openTrig, setOpenTrig] = React.useState(false);
  const [expandTrig, setExpandTrig] = React.useState(false);
  const [formFocusTrig, setFormFocusTrig] = React.useState(false);
  const [toolBarHideTrig, setToolBarHideTrig] = React.useState(false);
  const [scrollPos, setScrollPos] = React.useState(0);
  const [previousScrollPos, setPreviousScrollPos] = React.useState(0);
  const [nextWork, setNextWork] = React.useState("Heejun");
  const { x } = useSpring({ x: open ? 0 : -100 });
  const { h } = useSpring({ h: toolBarHideTrig ? 114 : 0 });

  const handleClickNext = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSelected(nextWork);
    const target = document.getElementById("Wrapper");
    if (target !== null) {
      target.scrollTo(0, 0);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleScroll = () => {
    const target = document.getElementById("Wrapper");
    if (target !== null) {
      setScrollPos(target.scrollTop);
      if (scrollPos > previousScrollPos) {
        setToolBarHideTrig(true);
      } else {
        setToolBarHideTrig(false);
      }
      setPreviousScrollPos(scrollPos);
    }
  };
  const handleSwipeHorizontal = useDrag(({ last, vxvy: [vx, vy] }) => {
    if (last) {
      if (Math.abs(vx) > Math.abs(vy)) {
        if (vx < -V_THRESHOLD) setOpen(false);
      }
    }
  });

  React.useEffect(() => {
    let i: number = authorlist.indexOf(author);
    if (authorlist.indexOf(author) < authorlist.length - 1) {
      i = i + 1;
    } else {
      i = 0;
    }
    setNextWork(authorlist[i]);
  }, [author]);

  React.useEffect(() => {
    const target = document.getElementById("Wrapper");
    if (target !== null) {
      target.scrollTo(0, 0);
    }
  }, [open]);
  React.useEffect(() => {
    if (formFocusTrig === true) {
      setToolBarHideTrig(true);
    } else {
      setToolBarHideTrig(false);
    }
  }, [formFocusTrig]);

  return (
    <Body
      style={{
        transform: interpolate([x], (x) => `translate3d(${x}%,0,0)`),
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (expandTrig === false) {
          setOpenTrig(false);
        }
      }}
      {...handleSwipeHorizontal()}
    >
      <ToolBar
        style={{
          transform: interpolate([h], (h) => `translate3d(0,${h},0)`),
          opacity: interpolate([h], (h) => `${1 - h / 114}`),
        }}
      >
        <LogoImg src={logoWhite} />
        <ExitButton onClick={handleClose}>×</ExitButton>
      </ToolBar>
      <Wrapper id={"Wrapper"} onScroll={handleScroll}>
        <Wrapper2>
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
        </Wrapper2>
      </Wrapper>

      <Comment
        openState={[openTrig, setOpenTrig]}
        expandState={[expandTrig, setExpandTrig]}
        focusState={[formFocusTrig, setFormFocusTrig]}
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
  height: 100%;
  opacity: 1;
  z-index: 10;
`);
const ToolBar = animated(styled.div`
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
  z-index: 11;
`);
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
const Wrapper = animated(styled.div`
  position: fixed;
  bottom: 42px;
  top: 0px;
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`);
const Wrapper2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NextWorkWrapper = styled.div`
  width: ${iphoneWidth * 0.7}px;
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
  height: ${iphoneWidth * 0.7 - 100}px;
  overflow: hidden;
`;
export default WorkPage;

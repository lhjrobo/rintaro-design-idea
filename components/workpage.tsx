import React from "react";
import styled from "@emotion/styled";
import { iphoneWidth, iphoneHeight, backgroundColor } from "../assets/rules";
import { useSpring, animated, interpolate } from "react-spring";
import Comment from "./comment";
import Overview from "./overview";
const logoWhite = require("../image/logo_white.png");
interface Props {
  thumb: string;
  titleEN: string;
  titleJP: string;
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
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
const WorkPage: React.FC<Props> = ({
  thumb,
  openState: [open, setOpen],
  overview,
  titleEN,
  titleJP,
}) => {
  const { s } = useSpring({ s: open ? 1 : 0, config: { tension: 350 } });
  const handleClose = () => {
    setOpen(false);
  };
  const [openTrig, setOpenTrig] = React.useState(false);
  const [expandTrig, setExpandTrig] = React.useState(false);
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
      <Wrapper>
        <Overview
          overview={overview}
          thumb={thumb}
          titleEN={titleEN}
          titleJP={titleJP}
        />
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
  width: ${iphoneWidth}px;
  height: ${iphoneHeight}px;
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
  overflow: scroll;
`;
export default WorkPage;

import React from "react";
import styled from "@emotion/styled";
import { iphoneWidth, backgroundColor } from "../assets/rules";
import globalCSS from "../styles/global";
import { Global } from "@emotion/core";
import thumbs from "../assets/thumbs";
import ThumbnailComponent from "./thumbnail";
import WorkPage from "./workpage";
const logoWhite = require("../image/logo_white.png");

const Mainpage = () => {
  const [scroll, setScroll] = React.useState("scroll");
  const [selected, setSelected] = React.useState("Heejun");
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState("");
  const [shuffledWorklist, setShuffledWorklist] = React.useState(
    Array.from(thumbs.keys())
  );
  React.useEffect(() => {
    let arraybuffer: string[] = Array.from(thumbs.keys());
    for (let i = arraybuffer.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = arraybuffer[i];
      arraybuffer[i] = arraybuffer[r];
      arraybuffer[r] = tmp;
    }
    setShuffledWorklist(arraybuffer);
    setSelected(shuffledWorklist[0]);
  }, []);
  return (
    <Wrapper style={{ overflow: scroll }}>
      <Body>
        <Global styles={globalCSS} />
        <>
          <TitleLogo>
            <LogoImg src={logoWhite} />
          </TitleLogo>
          {shuffledWorklist.map((index) => {
            return (
              <ThumbnailComponent
                key={index}
                author={index}
                scrollState={[scroll, setScroll]}
                selectedState={[selected, setSelected]}
                openState={[open, setOpen]}
                focusState={[focus, setFocus]}
              />
            );
          })}
        </>
        <WorkPage
          openState={[open, setOpen]}
          selectedState={[selected, setSelected]}
          author={selected}
          authorlist={shuffledWorklist}
        />
      </Body>
    </Wrapper>
  );
};

const TitleLogo = styled.div`
  height: 114px;
  display: flex;
  align-items: center;
  margin-bottom: 51px;
`;
const LogoImg = styled.img`
  height: 90px;
  margin-left: 12px;
`;
const Body = styled.div`
  background-color: ${backgroundColor};
  z-index: 0;
  height: 100%;
  width: ${iphoneWidth}px;
`;

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  z-index: -1;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Mainpage;

import React from "react";
import styled from "@emotion/styled";
import { iphoneHeight, iphoneWidth, backgroundColor } from "../assets/rules";
import globalCSS from "../styles/global";
import { Global } from "@emotion/core";
import thumbs from "../assets/thumbs";
import ThumbnailComponent from "./thumbnail";
const logoWhite = require("../image/logo_white.png");

const Mainpage = () => {
  const [scroll, setScroll] = React.useState("visible");
  const [selected, setSelected] = React.useState("");
  return (
    <Wrapper>
      <Body style={{ overflow: `${scroll}` }}>
        <Global styles={globalCSS} />
        <>
          <TitleLogo>
            <LogoImg src={logoWhite} />
          </TitleLogo>
          {thumbs.map((thumb) => {
            return (
              <ThumbnailComponent
                key={thumb.author}
                author={thumb.author}
                imgsrc={thumb.src}
                titleEN={thumb.titleEN}
                titleJP={thumb.titleJP}
                scrollState={[scroll, setScroll]}
                selectedState={[selected, setSelected]}
                overview={thumb.overview}
                contents={thumb.contents}
              />
            );
          })}
        </>
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
  height: ${iphoneHeight}px;
  width: ${iphoneWidth}px;
`;

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  z-index: -1;
  height: ${iphoneHeight}px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Mainpage;

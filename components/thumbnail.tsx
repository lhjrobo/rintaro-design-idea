import React from "react";
import styled from "@emotion/styled";
import { iphoneWidth } from "../assets/rules";
import thumbs from "../assets/thumbs";
interface Props {
  author: string;
  scrollState: [string, React.Dispatch<React.SetStateAction<string>>];
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  focusState: [string, React.Dispatch<React.SetStateAction<string>>];
  selectedState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const ThumbnailComponent: React.FC<Props> = ({
  author,
  openState: [open, setOpen],
  focusState: [focus, setFocus],
  scrollState: [, setScroll],
  selectedState: [, setSelected],
}) => {
  const [opacity, setOpacity] = React.useState(0);
  const [thumbWidth, setThumbWidth] = React.useState(iphoneWidth);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (focus !== author) {
      setFocus(author);
      setSelected(author);
    } else {
      setOpen(true);
    }
  };
  React.useEffect(() => {
    if (open === true) {
      setScroll("hidden");
    } else {
      setScroll("scroll");
      setFocus("");
    }
  }, [open]);
  React.useEffect(() => {
    if (focus === author) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [focus]);
  React.useEffect(() => {
    if (window !== undefined) {
      if (iphoneWidth >= window.innerWidth) {
        setThumbWidth(window.innerWidth);
      } else {
        setThumbWidth(iphoneWidth);
      }
    }
  }, []);
  return (
    <Wrapper
      onClick={handleClick}
      style={{ width: `${thumbWidth}px`, height: `${thumbWidth}px` }}
    >
      <ThumbBlur
        src={thumbs.get(author).src}
        style={{
          opacity: opacity,
          width: `${thumbWidth}px`,
          height: `${thumbWidth}px`,
        }}
      />
      <TitleWrapper
        style={{
          opacity: opacity,
          width: `${thumbWidth}px`,
          height: `${thumbWidth}px`,
        }}
      >
        <Title>
          <div>{thumbs.get(author).titleJP}</div>
          <div>{thumbs.get(author).titleEN}</div>
        </Title>
      </TitleWrapper>
      <Thumb
        src={thumbs.get(author).src}
        style={{
          width: `${thumbWidth}px`,
          height: `${thumbWidth}px`,
        }}
      />
      <SmokeGlass
        style={{
          opacity: opacity * 0.5,
          width: `${thumbWidth}px`,
          height: `${thumbWidth}px`,
        }}
      />
    </Wrapper>
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
  pointer: cursor;
  z-index: 3;
`;

const TitleWrapper = styled.div`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  position: absolute;
  z-index: 5;
  display: flex;
  font-size: 1.6rem;
  color: white;
  word-break: keep-all;
  white-space: pre-line;
`;
const Title = styled.div`
  margin: auto 10% auto 10%;
`;
const SmokeGlass = styled.div`
  width: ${iphoneWidth}px;
  height: ${iphoneWidth}px;
  position: absolute;
  z-index: 4;
  background-color: black;
`;

export default ThumbnailComponent;

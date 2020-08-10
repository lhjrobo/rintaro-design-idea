import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated, interpolate } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useDrag } from "react-use-gesture";
const uuid = require("react-uuid");
const otherComments = ["a", "b", "c", "d", "erer", "a", "b", "c"];
const V_THRESHOLD = 0.5;

interface Props {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  expandState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  focusState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Comment: React.FC<Props> = ({
  openState: [openTrig, setOpenTrig],
  expandState: [expandTrig, setExpandTrig],
  focusState: [focusTrig, setFocusTrig],
}) => {
  const [commentContent, setCommentContent] = React.useState(
    "ここにコメント入力"
  );
  const [cursorOnTrig, setCursorOnTrig] = React.useState(false);

  const { x } = useSpring({ x: openTrig ? 0 : cursorOnTrig ? 230 : 250 });
  const { s } = useSpring({
    s: expandTrig ? window.innerHeight : focusTrig ? 120 : 300,
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setCommentContent(e.target.value);
  };
  const handleContentFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (focusTrig === false) {
      setFocusTrig(true);
      setCommentContent("");
    }
  };
  const handleSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (openTrig === true && commentContent !== "") {
      setFocusTrig(false);
      setCommentContent("ここにコメント入力");
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (openTrig === false) {
      setOpenTrig(true);
    } else {
      setExpandTrig(!expandTrig);
    }
  };
  const handleFormBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setFocusTrig(false);
  };
  const handleSwipeVertical = useDrag(({ last, vxvy: [vx, vy] }) => {
    if (last) {
      if (Math.abs(vx) < Math.abs(vy)) {
        if (vy < -V_THRESHOLD) setExpandTrig(true);
        else if (vy > V_THRESHOLD) setExpandTrig(false);
      }
    }
  });
  return (
    <CommentBox
      style={{
        transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
        height: interpolate([s], (s) => `${s}px`),
      }}
      onClick={handleClick}
      onMouseEnter={() => setCursorOnTrig(true)}
      onMouseLeave={() => setCursorOnTrig(false)}
    >
      <CommentBoxTitle>
        <span>^</span>
      </CommentBoxTitle>

      <CommentBoxOtherComments
        onClick={(e) => e.stopPropagation()}
        {...handleSwipeVertical()}
      >
        {otherComments.map((comment) => {
          return (
            <CommentBoxOtherComment key={uuid()}>
              {comment}
            </CommentBoxOtherComment>
          );
        })}
      </CommentBoxOtherComments>
      <CommentBoxFormWrapper onClick={(e) => e.stopPropagation()}>
        <CommentBoxForm
          value={commentContent}
          onChange={handleContentChange}
          onFocus={handleContentFocus}
          onBlur={handleFormBlur}
        />
        <CommentBoxFormSubmitButton onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </CommentBoxFormSubmitButton>
      </CommentBoxFormWrapper>
    </CommentBox>
  );
};

const CommentBox = animated(styled.div`
  width: 100%;
  height: 300px;
  background-color: #000000;
  right: 0px;
  bottom: 0px;
  position: fixed;
  display: grid;
  grid-template-rows: 50px 1fr 70px;
  z-index: 12;
`);

const CommentBoxTitle = styled.div`
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  grid-row: 1 / 2;
`;

const CommentBoxForm = styled.textarea`
  height: 40px;
  line-height: 40px;
  margin: 15px;
  border-radius: 20px;
  border: 0px;
  background-color: #ffffff;
  padding: 0px 15px 0px 15px;
  resize: none;
  font-size: 16px;
  outline: none;
  grid-column: 1/ 2;
`;
const CommentBoxOtherComments = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-top: 1px solid white;
  grid-row: 2/3;
  font-size: 16px;
`;
const CommentBoxOtherComment = styled.div`
  background-color: white;
  color: black;
  border-radius: 20px;
  margin: 15px;
  height: 40px;
  line-height: 40px;
  padding: 0px 15px 0px 15px;
  width: auto;
`;
const CommentBoxFormWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  border-top: 1px solid white;
  position: absolute;
  grid-row: 3/ 4;
  grid-template-columns: 1fr 55px;
`;
const CommentBoxFormSubmitButton = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  margin: 15px 15px 15px 0px;
  grid-column: 2/ 3;
  border: 0px;
  background-color: #333333;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
export default Comment;

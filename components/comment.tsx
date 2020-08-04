import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated, interpolate } from "react-spring";
import { iphoneWidth, iphoneHeight } from "../assets/rules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const otherComments = ["a", "b", "c", "d", "erer", "a", "b", "c"];
interface Props {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  expandState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Comment: React.FC<Props> = ({
  openState: [openTrig, setOpenTrig],
  expandState: [expandTrig, setExpandTrig],
}) => {
  const [commentContent, setCommentContent] = React.useState(
    "ここにコメント入力"
  );
  const [focusTrigger, setFocusTrigger] = React.useState(false);
  const [cursorOnTrig, setCursorOnTrig] = React.useState(false);

  const { x } = useSpring({ x: openTrig ? 0 : cursorOnTrig ? 230 : 250 });
  const { s } = useSpring({ s: expandTrig ? window.innerHeight : 300 });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setCommentContent(e.target.value);
    console.log(commentContent);
  };
  const handleContentFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    if (focusTrigger === false) {
      setFocusTrigger(true);
      setCommentContent("");
    }
  };
  const handleSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (openTrig === true && commentContent !== "") {
      setFocusTrigger(false);
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
      <CommentBoxOtherComments onClick={(e) => e.stopPropagation()}>
        {otherComments.map((comment) => {
          return <CommentBoxOtherComment>{comment}</CommentBoxOtherComment>;
        })}
      </CommentBoxOtherComments>
      <CommentBoxFormWrapper onClick={(e) => e.stopPropagation()}>
        <CommentBoxForm
          value={commentContent}
          onChange={handleContentChange}
          onFocus={handleContentFocus}
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
  grid-template-rows: 50px 1fr 90px;
`);

const CommentBoxTitle = styled.div`
  font-weight: bold;
  margin: 15px;
  text-align: center;
  height: 20px;
  grid-row: 1 / 2;
`;

const CommentBoxForm = styled.textarea`
  width: 230px;
  height: 20px;
  margin: 15px;
  border-radius: 20px;
  border: 0px;
  background-color: #ffffff;
  padding: 20px;
  resize: none;
  font-size: 1.4rem;
  outline: none;
`;
const CommentBoxOtherComments = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-top: 1px solid white;
  grid-row: 2/3;
`;
const CommentBoxOtherComment = styled.div`
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 20px;
  margin: 15px;
  height: 20px;
  width: 230px;
`;
const CommentBoxFormWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid white;
  position: absolute;
  bottom: 70px;
  left: 0px;
  grid-row: 3/ 4;
`;
const CommentBoxFormSubmitButton = styled.div`
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 20px;
  padding: 15px 25px 25px 15px;
  margin: 15px 15px 15px 0px;

  border: 0px;
  background-color: #333333;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
`;
export default Comment;

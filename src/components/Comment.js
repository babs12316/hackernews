import { useState, useEffect, memo } from "react";
import { getComment } from "../services/HackerNewsApi";
import { mapTime } from "../utils/ConvertTime";
import { CommentWrapper, CommentBodyElement } from "../styles/CommentStyles";
import { Link } from "react-router-dom";

const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    getComment(commentId).then((data) => setComment(data));
  }, [commentId]);

  return (
    <>
      <CommentWrapper>
        <CommentBodyElement>
          <Link to="/">{comment.by}</Link>
        </CommentBodyElement>
        <CommentBodyElement>
          {mapTime(comment.time) + " ago"}
        </CommentBodyElement>
        <div dangerouslySetInnerHTML={{ __html: comment.text }} />
      </CommentWrapper>
    </>
  );
};

export default memo(Comment);

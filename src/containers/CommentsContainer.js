import React, { useEffect, useState } from "react";
import Comment from "../components/Comment";
import { getStory } from "../services/HackerNewsApi";
import { useParams } from "react-router-dom";
import Story from "../components/Story";
import { CommentsContainerWrapper } from "../styles/CommentsContainerSyles";
export const CommentsContainer = () => {
  const [commentIds, setCommentIds] = useState([]);
  let { storyId } = useParams();

  useEffect(() => {
    getStory(storyId).then((data) => setCommentIds(data.kids));
  }, [storyId]);

  return (
    <>
      <CommentsContainerWrapper>
        <Story storyId={storyId}></Story>
        {commentIds.map((commentId) => (
          <Comment key={commentId} commentId={commentId} />
        ))}
      </CommentsContainerWrapper>
    </>
  );
};

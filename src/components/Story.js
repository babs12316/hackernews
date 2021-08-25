import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/HackerNewsApi";
import { mapTime } from "../utils/ConvertTime";
import {
  StoryWrapper,
  StoryTitle,
  StoryBody,
  StoryBodyElement,
} from "../styles/StoryStyles";
import {Link} from "react-router-dom";

const Story = ({ storyId,storyNumber })=> {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <>
      <StoryWrapper>
        <StoryTitle>
            <Link to="/">{storyNumber ?storyNumber +'. '+ story.title : story.title}</Link>
        </StoryTitle>
        <StoryBody>
          <StoryBodyElement>{story.score} points</StoryBodyElement>
          <StoryBodyElement>
            <Link to="/"> {story.by}</Link>
          </StoryBodyElement>
          <StoryBodyElement>{mapTime(story.time)} ago</StoryBodyElement>
          <StoryBodyElement>
            <Link to={`/comments/${story.id}`}> {story.kids && story.kids.length} comments </Link>
          </StoryBodyElement>
        </StoryBody>
      </StoryWrapper>
    </>
  ) : null;
}


export default memo(Story);

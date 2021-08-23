import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/HackerNewsApi';
import { mapTime } from '../utils/ConvertTime';
import {
    StoryWrapper,
    StoryTitle,
    StoryMeta,
    StoryMetaElement,
  } from '../styles/StoryStyles'

const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <>
     <StoryWrapper>
     <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
        </StoryWrapper>
     
    </>
  ) : null;
  
});

export default Story;
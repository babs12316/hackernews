import React, { useEffect, useState } from "react";
import Story from "../components/Story";
import { getStoryIds } from "../services/HackerNewsApi";
import {
  StoriesContainerTitle,
  StoriesContainerWrapper,
  MoreButton,
} from "../styles/StoriesContainerStyles";
import { GlobalStyle } from "../styles/GlobalStyles";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [count, setCount] = useState({ start: 1, last: 31 });

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <StoriesContainerTitle>Hacker News</StoriesContainerTitle>
        {storyIds.slice(count.start, count.last).map((storyId, index) => (
          <Story
            key={storyId}
            storyId={storyId}
            storyNumber={count.start + index}
          />
        ))}

        <MoreButton
          onClick={(e) =>
            setCount({ start: count.last, last: count.last + 30 })
          }
        >
          More
        </MoreButton>
      </StoriesContainerWrapper>
    </>
  );
};

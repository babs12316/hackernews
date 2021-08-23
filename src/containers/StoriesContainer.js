import React, { useEffect, useState } from 'react';
import Story from '../components/Story';
import { getStoryIds } from '../services/HackerNewsApi';
import {
    GlobalStyle,
    StoriesContainerWrapper,
    MoreButton
  } from '../styles/StoriesContainerStyles';
export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    const [count,setCount]= useState({start:0,last:30})
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, []);
  
    return (
      <>
       <GlobalStyle />
       <StoriesContainerWrapper>
          <h1>Hacker News Stories</h1>
          {storyIds.slice(count.start, count.last).map(storyId => (
            <Story key={storyId} storyId={storyId} />
          ))}

          <MoreButton onClick={(e)=> setCount ({ start:count.last+1, last:count.last+30})}>More</MoreButton>
        </StoriesContainerWrapper>
      </>
    );
  };
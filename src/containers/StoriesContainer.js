import React, { useEffect, useState } from 'react'
import { Story } from '../components/Story';
import { getStoryIds } from '../services/hnApi'
import { StoriesContainerWrapper, GlobalStyle } from '../styles/StoriesContainerStyles'
export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, [])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>

    </>
  )
}


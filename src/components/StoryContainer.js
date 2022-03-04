import { useMemo } from 'react';
import StoryCard from './StoryCard';

const StoryContainer = ({ stories }) => {

  const memoizeStoryCards = useMemo(() => stories.map((story, index) => <StoryCard key={index} title={story.title} />), [stories])
  
  return (
    <div className='story-container'>
      {memoizeStoryCards}
    </div>
  )
}

export default StoryContainer;
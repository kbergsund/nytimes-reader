import { useMemo } from 'react';
import StoryCard from './StoryCard';
import '../css/StoryContainer.css';

const StoryContainer = ({ stories }) => {

  const memoizeStoryCards = useMemo(() => stories.map((story, index) => <StoryCard key={index} title={story.title} byline={story.byline} image={story.image} alt={story.imageCaption}/>), [stories])
  
  return (
    <div className='story-container'>
      {memoizeStoryCards}
    </div>
  )
}

export default StoryContainer;
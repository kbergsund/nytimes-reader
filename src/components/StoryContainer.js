import { useMemo } from 'react';
import StoryCard from './StoryCard';
import StoryFilterDropdown from './StoryFilterDropdown';
import '../css/StoryContainer.css';

const StoryContainer = ({ stories, sections }) => {

  const memoizeStoryCards = useMemo(() => stories.map(story => <StoryCard key={story.id} id={story.id} title={story.title} byline={story.byline} image={story.image} alt={story.imageCaption}/>), [stories])
  
  return (
    <div className='story-container'>
      <StoryFilterDropdown sections={sections}/>
      {memoizeStoryCards}
    </div>
  )
}

export default StoryContainer;
import { useMemo, useState } from 'react';
import StoryCard from './StoryCard';
import StoryFilterDropdown from './StoryFilterDropdown';
import '../css/StoryContainer.css';

const StoryContainer = ({ stories, sections }) => {
  const [filteredStories, setFilteredStories] = useState([])
  
  const filterStories = (section) => {
    const matchingStories = stories.filter(story => story.section === section)
    console.log(matchingStories)
    setFilteredStories(stories.filter(story => story.section === section))
    return filteredStories.map(story => <StoryCard key={story.id} id={story.id} title={story.title} byline={story.byline} image={story.image} alt={story.imageCaption}/>)
  }

  const memoizeStoryCards = useMemo(() => stories.map(story => <StoryCard key={story.id} id={story.id} title={story.title} byline={story.byline} image={story.image} alt={story.imageCaption}/>), [stories])

  const generateFilteredStories = filteredStories.map(story => <StoryCard key={story.id} id={story.id} title={story.title} byline={story.byline} image={story.image} alt={story.imageCaption}/>)

  
  return (
    <div className='story-container'>
      <StoryFilterDropdown sections={sections} filterStories={filterStories}/>
      {!filteredStories.length ? memoizeStoryCards : generateFilteredStories}
    </div>
  )
}

export default StoryContainer;
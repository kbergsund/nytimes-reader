import { useParams, Link } from 'react-router-dom';
import '../css/StoryPage.css';

const StoryPage = ({ findClickedStory }) => {
  const clickedStoryId = useParams().storyId
  
  const clickedStory = findClickedStory(clickedStoryId)
  
  
  return(
    <section className='story-page'>
      <h2>{clickedStory.title}</h2>
      <p>{clickedStory.byline}</p>
      <p>{clickedStory.abstract}</p>
      <img className='story-page-img' src={clickedStory.image} alt={clickedStory.imageCaption} />
      <p>{clickedStory.imageCaption}</p>
      <a className='story-page-btns' href={clickedStory.url} target='_blank' rel='noreferrer'>Click to Read</a>
      <Link className='story-page-btns' to={'/'}>Back to Homepage</Link>
    </section>
  )
}

export default StoryPage;
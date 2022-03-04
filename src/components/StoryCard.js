import { Link } from 'react-router-dom';
import '../css/StoryCard.css';

const StoryCard = ({ id, title, byline, image, alt }) => {
  return (
    <Link to={`/${id}`}>
      <section className='story-card'>
        <h2>{title}</h2>
        <p>{byline}</p>
        <img src={image} alt={alt} />
      </section>
    </Link>
  )
}

export default StoryCard;
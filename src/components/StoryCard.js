import '../css/StoryCard.css';

const StoryCard = ({ title, byline, image, alt }) => {
  return(
    <section className='story-card'>
      <h2>{title}</h2>
      <p>{byline}</p>
      <img src={image} alt={alt} />
    </section>
  )
}

export default StoryCard;
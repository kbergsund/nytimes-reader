import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StoryContainer from './components/StoryContainer';
import StoryPage from './components/StoryPage';
import fetchStories from './utils';
import './css/App.css';

function App() {
  const [stories, setStories] = useState([])
  const [clickedStory, setClickedStory] = useState(null);

  useEffect(() => {
    fetchStories().then(results => setStories(results.map(story => {
      return {
        section: story.section,
        title: story.title,
        abstract: story.abstract,
        url: story.url,
        byline: story.byline,
        published: story.published_date,
        image: story.multimedia[0].url,
        imageCaption: story.multimedia[0].caption
      }
    })))
  }, [])

  //handleClick on storycard

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<StoryContainer stories={stories}/>} />
        <Route path='/:storyKey' element={<StoryPage />} />
      </Routes>
    </div>
  );
}

export default App;

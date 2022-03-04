import { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StoryContainer from './components/StoryContainer';
import StoryPage from './components/StoryPage';
import fetchStories from './utils';
import './css/App.css';

function App() {
  const [stories, setStories] = useState([])
  const [sections, setSections] = useState([])

  useEffect(() => {
    fetchStories().then(results => setStories(results.map((story, index) => {
      return {
        id: index,
        section: story.section,
        title: story.title,
        abstract: story.abstract,
        url: story.url,
        byline: story.byline,
        published: story.published_date,
        image: story.multimedia[0].url,
        imageCaption: story.multimedia[0].caption
      }
    }))).then(() => memoizeStorySections)
  }, [])

  const memoizeStorySections = useMemo(() => {
    const storySections = stories.reduce((sections, story) => {
      if (!sections.includes(story.section)) {
        sections.push(story.section)
      }
      return sections;
    }, [])
    setSections(storySections)
  }, [stories])

  const findClickedStory = (id) => stories.find(story => story.id === Number(id))

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<StoryContainer stories={stories} sections={sections}/>} />
        <Route path='/:storyId' element={<StoryPage findClickedStory={findClickedStory}/>} />
      </Routes>
    </div>
  );
}

export default App;

const fetchStories = async () => {
  const storyData = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tZpL0xrIbzK48cxWbVLio1yFA6SWFyxp')
  const { results } = await storyData.json();
  return results;
}

export default fetchStories;
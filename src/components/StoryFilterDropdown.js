import { useMemo, useState } from 'react';

const StoryFilterDropdown = ({ sections, filterStories }) => {
  const [selectedSection, setSelectedSection] = useState('Category')

  const memoizeSectionsOptions = useMemo(() => sections.map((section, index) => <option key={index}>{section}</option>), [sections])

  return (
    <>
      <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
        <option disabled>Category</option>
        {memoizeSectionsOptions}
      </select>
      <button onClick={() => filterStories(selectedSection)}>Filter</button>
      <button onClick={() => filterStories('')}>Back to All Stories</button>
    </>
  )
}

export default StoryFilterDropdown; 
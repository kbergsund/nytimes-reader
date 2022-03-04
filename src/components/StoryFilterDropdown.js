import { useMemo } from 'react';

const StoryFilterDropdown = ({ sections }) => {
  const memoizeSectionsOptions = useMemo(() => sections.map(section => <option>{section}</option>), [sections])
  
  return(
    <select>
      <option disabled>Category</option>
      {memoizeSectionsOptions}
    </select>
  )
}

export default StoryFilterDropdown; 
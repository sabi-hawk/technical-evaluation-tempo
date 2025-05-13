import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [storyIds, setStoryIds] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    

    fetchStories();
  },[]);

  return (
    <div className="App">
      <h2>List of Story Titles</h2>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
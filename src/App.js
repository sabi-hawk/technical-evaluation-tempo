import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [storyIds, setStoryIds] = useState([]);
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    const fetchStories = async() => {
      try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        setStoryIds(response.data);


        const titlePromises = response.data.map((id) =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        );

        const stories = await Promise.all(titlePromises);
        const storyTitles = stories.map((res) => res.data?.title || 'No Title');
        setTitles(storyTitles);
        console.log(response.data)
      } catch (err) {
        console.log("Error")
      }
    }

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

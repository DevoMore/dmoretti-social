import { useEffect } from 'react';
import './Social.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';


function Social() {

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(console.log);
  }, [])

  return (
    <div>
      <NavBar/>
      <Posts/>
    </div>
  );
}

export default Social;

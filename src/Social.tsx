import { useEffect, useState } from 'react';
import './Social.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import CreatePost from './components/Create/index';

import { TPost } from './Types/typeSocial';
import { ISocialContext, SocialContext } from './Context/SocialContext';

function Social() {
  const [jsonData, setJsonData] = useState<TPost[]>()
  const [selectedPost, setSelectedPost] = useState<TPost>()
  const [Check, setCheck] = useState(false)
  
  
  const propTypes: ISocialContext = {jsonData, setJsonData, selectedPost, setSelectedPost, Check, setCheck}

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(json => setJsonData(json.posts))
  }, [])

  return (
    <SocialContext.Provider value={propTypes}>
      <div className='page'>
        <NavBar/>
        {!Check && <Posts/>}
        {Check && <CreatePost/>}
      </div>
    </SocialContext.Provider>
  );
}

export default Social;

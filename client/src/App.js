import Header from './components/Header';
import Blog from './components/Blog';
import AddPost from './components/AddPost';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPost] = useState([])

  async function getPosts() {
    const res = await fetch('http://localhost:5000/posts')
    const postsArray = await res.json()

    setPost(postsArray)
  }

  useEffect(() => {
    getPosts()
  },[])

  return (
    <div className='App'>
      <Header />
      <AddPost />
      {posts.map(post => (
        <Blog key={post.post_id} post={post} />
      ))}
    </div>
  );
}

export default App;

import Header from './components/Header';
import Blog from './components/Blog';
import AddPost from './components/AddPost';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {
  const addpost = document.querySelectorAll('.addpost section');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      addpost[0].classList.add('fixed')
    } else {
      addpost[0].classList.remove('fixed')
    }
  });

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
    <div className="App">
      <Header />
      <div className="wrapper container">
        <AddPost />
        <div className="bloglist container">
          {posts.length > 0 ? <><h2 className="mt-3">Blogs</h2>{posts.map(post => (
            <Blog key={post.post_id} post={post} />
          ))}</> : <h2 className="mt-3">No posts</h2>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

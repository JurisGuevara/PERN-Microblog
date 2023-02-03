import {useState} from 'react'

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  const submitForm = async e => {
    e.preventDefault()
    try {
      const blogPost = {title, body, author}

      const response = await fetch('http://localhost:5000/posts', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(blogPost)
        })
      
      window.location.reload()
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="container mt-3">
      <h2>Post a Blog</h2>
      <div className="card text-white bg-primary mb-3">
        <div className="card-body">
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Title {title}</label>
              <textarea required className="form-control pb-0" rows="1" value={title} onChange={e => setTitle(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Body {body}</label>
              <textarea required className="form-control pb-0" rows="3" value={body} onChange={e => setBody(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Author {author}</label>
              <textarea required className="form-control pb-0" rows="1" value={author} onChange={e => setAuthor(e.target.value)}></textarea>
            </div>
            <button className='btn btn-sm btn-light mt-2 float-end'>Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default AddPost;
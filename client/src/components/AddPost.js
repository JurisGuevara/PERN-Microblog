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
    <div className="addpost container p-0">
      <section className="container">
        <h2>Post a Blog</h2>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Title</label>
                <textarea required className="form-control pb-0" rows="1" value={title} onChange={e => setTitle(e.target.value)}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
                <textarea required className="form-control pb-0" rows="3" value={body} onChange={e => setBody(e.target.value)}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Author</label>
                <textarea required className="form-control pb-0" rows="1" value={author} onChange={e => setAuthor(e.target.value)}></textarea>
              </div>
              <button className='btn btn-sm btn-success mt-2 float-end'>Post</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default AddPost;
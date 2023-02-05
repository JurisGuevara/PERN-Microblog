import Edit from './Edit';

const Blog = ({post}) => {
  async function handleDelete (id) {
    try {
      const res = await fetch('http://localhost:5000/posts/' + id, {
        method: 'DELETE'
      })
      window.location.reload()
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="container p-0">
      <Edit postItem={post} />
      <div className="card text-dark bg-light mb-3">
        <div className="card-body d-flex align-items-start justify-content-between container">
          <div className="w-100">
            <h5 className="card-title mb-4">
              {post.post_title}
            </h5>
            <p className="card-text">
              {post.post_body}
            </p>
          </div>
        </div>
        <div className="card-body">
          ~ {post.post_author}
          <div className="float-end">
            <button type="button" data-bs-toggle="modal" data-bs-target={'#' + post.post_id} className="btn btn-sm btn-primary">Edit</button>
            <button className="btn btn-sm btn-secondary" style={{marginLeft: "8px"}} onClick={() => handleDelete(post.post_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Blog;
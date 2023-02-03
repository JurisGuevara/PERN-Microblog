import { useState } from 'react';

const Edit = ({postItem}) => {
  const [title, setTitle] = useState(postItem.post_title)
  const [body, setBody] = useState(postItem.post_body)

  const reset = () => {
    setTitle(postItem.post_title)
    setBody(postItem.post_body)
  }

  const save = async () => {
    try {
      const postBody = {title, body}
      const res = await fetch('http://localhost:5000/posts/' + postItem.post_id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postBody)
      })
      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="modal fade" id={postItem.post_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => reset()}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
        <div className="modal-body">
            <h5>Edit Title</h5>
            <textarea className="form-control" cols="30" rows="1" value={title} onChange={e => setTitle(e.target.value)}></textarea>
          </div>
          <div className="modal-body pt-0">
            <h5>Edit Body</h5>
            <textarea className="form-control" cols="30" rows="3" value={body} onChange={e => setBody(e.target.value)}></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-primary" onClick={() => save()}>Save</button>
            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Edit;
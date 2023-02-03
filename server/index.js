const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
app.use(cors())
app.use(express.json())

/** ROUTES */
// get all posts
app.get('/posts', async (req, res) => {
  try {
    const allPosts = await pool.query('select * from posts')
    res.json(allPosts.rows)
  } catch (err) {
    console.error(err.message)
  }
})

// get a post
app.get('/posts/:id', async (req, res) => {
  try {
    const {id} = req.params
    const post = await pool.query(
      'select * from posts where post_id = $1',
      [id]
      )
    res.json(post.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// create a post
app.post('/posts', async (req, res) => {
  try {
    const {title, body, author} = req.body
    const newPost = await pool.query(
      'insert into posts (post_title, post_body, post_author) values ($1, $2, $3) returning *',
      [title, body, author]
    )
    res.json()
  } catch (err) {
    console.error(err.message)
  }
})

// update a post
app.put('/posts/:id', async (req, res) => {
  try {
    const {id} = req.params
    const {title, body} = req.body

    if (title) {
      const updateTitle = await pool.query(
        'update posts set post_title = $1 where post_id = $2',
        [title, id]
      )
    }

    if (body) {
      const updateBody = await pool.query(
        'update posts set post_body = $1 where post_id = $2',
        [body, id]
      )
    }

    res.json()
  } catch (err) {
    console.error(err.message)
  }
})

//delete a post
app.delete('/posts/:id', async (req, res) => {
  try {
    const {id} = req.params
    const delPost = await pool.query(
      'delete from posts where post_id = $1',
      [id]
    )

    res.json()
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log('Server started, listening on port 5000...')
})

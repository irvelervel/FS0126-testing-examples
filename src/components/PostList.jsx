import { useEffect, useState } from 'react'
import { FormControl, ListGroup } from 'react-bootstrap'

const PostList = function () {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('response non ok', res.status)
        }
      })
      .then((arrayOfPosts) => {
        setPosts(arrayOfPosts)
      })
      .catch((err) => {
        console.log('errore nel recupero post', err)
      })
  }, [])

  return (
    <>
      <h2>Questa è una lista di posts</h2>
      <FormControl
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cerca..."
        data-testid="giangiorgio"
      />
      <ListGroup>
        {posts
          .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
          .map((p) => {
            return (
              <ListGroup.Item key={p.id} data-testid="elemento-lista">
                {p.title}
              </ListGroup.Item>
            )
          })}
      </ListGroup>
    </>
  )
}

export default PostList

import Link from 'next/link'

import e from '../../dbschema/edgeql-js' // import of the query builder
import { createClient } from 'edgedb'

const client = createClient()

export default async function Home() {

  const selectedPosts = e.select(e.BlogPost, () => ({
    id: true,
    title: true,
    content: true
  }))

  const posts = await selectedPosts.run(client)

  return (
    <div className="container mx-auto p-4 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="mb-4"
          >
            <Link
              href={`/post/${post.id}`}
              className="text-blue-500"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
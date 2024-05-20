import Link from 'next/link'

type Post = {
  id: string
  title: string
  content: string
}

export default async function Home() {
  const posts: Post[] = [
    {
      id: 'post1',
      title: 'This one weird trick makes using databases fun',
      content: 'Use EdgeDB',
    },
    {
      id: 'post2',
      title: 'How to build a blog with EdgeDB and Next.js',
      content: "Let's start by scaffolding our app with `create-next-app`.",
    },
  ]

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
import React from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { type PostProps } from '@/interfaces'
import { type ApiPost } from '@/interfaces'

const PostsPage: React.FC<{posts: PostProps[]} > = ({posts}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='sm:px-4 md:px-6 mt-3'>
        <div>
          <h1 className='font-bold text-lg'>Post Content</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4 md:px-6 mt-3'>
          {
          posts?.map(({title, content, userId }: PostProps, key:number) => (
            <PostCard
              key={key}
              userId={userId}
              title={title}
              content={content}
            />
          ))
          }

        </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  // Map API data to your PostProps structure
  const posts = data.map((post: ApiPost) => ({
    userId: post.userId,
    title: post.title,
    content: post.body, // Use 'body' as 'content'
  }))

  return {
    props: {
      posts
    }
  }
}


export default PostsPage;
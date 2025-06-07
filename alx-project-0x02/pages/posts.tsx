import React from 'react'
import Header from '@/components/layout/Header'

const posts = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='px-2 sm:px-4 md:px-6 mt-3'>
        <h1 className='text-2xl font-bold'>Posts Page</h1>
        <p className='mt-2'>This is where you can view all posts.</p>
      </main>
    </div>
  )
}

export default posts
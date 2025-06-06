import React from 'react'
import Header from '../components/layout/Header'

const about = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <div>
            <h1 className='text-2xl font-bold text-center mt-10'>About Page</h1>
            <p className='text-center mt-4'>This is the about page of our project.</p>
            <p className='text-center mt-2'>Here you can find information about the project, its purpose, and how to contribute.</p>
        </div>
    </div>
  )
}

export default about
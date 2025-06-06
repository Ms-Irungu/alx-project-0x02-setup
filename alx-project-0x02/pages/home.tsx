import React from 'react'
import Header from '../components/layout/Header'

const home = () => {
  return (
    <div className = 'flex flex-col min-h-screen'>
      <Header />
        <div>
            <h1 className='text-2xl font-bold text-center mt-10'>Home Page</h1>
            <p className='text-center mt-4'>Welcome to the home page of our project.</p>
            <p className='text-center mt-2'>Here you can find the latest updates and information about the project.</p>
        </div>
    </div>
  )
}

export default home
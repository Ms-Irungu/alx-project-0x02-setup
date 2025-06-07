import React from 'react'
import Header from '../components/layout/Header'
import Card from '@/components/common/Card'

const home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3 px-2">
          <Card
            title="Project Overview"
            content="Get a quick summary of what this project is about and its main objectives."
          />
          <Card
            title="Latest News"
            content="Stay updated with the most recent developments and announcements."
          />
          <Card
            title="Get Involved"
            content="Learn how you can contribute or participate in the project."
          />
        </div>
      </main>
    </div>
  )
}

export default home;
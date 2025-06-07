import React from 'react'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

const about = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4 md:px-6 mt-3'>
        <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
        <Button size="large" shape="rounded-full">Large Rounded-full</Button>
      </div>
    </div>
  )
}

export default about
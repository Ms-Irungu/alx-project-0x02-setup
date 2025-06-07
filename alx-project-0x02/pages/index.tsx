import React from 'react'
import Header from '@/components/layout/Header'
import Link from 'next/link'

const index = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header /> 
       <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-sky-100 to-blue-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-500">
            Welcome to SoloForge! Mastering Project Autonomy.
          </h1>
          <p className="mt-4 text-xl text-blue-700">
            Scaffold a Next.js application with TypeScript and Tailwind CSS. Enjoy!
          </p>
          <Link href='/home' className="inline-block mt-6 px-6 py-3 bg-blue-400 text-blue-800 rounded-full font-semibold hover:bg-blue-300 transition">
            Get Started
          </Link>
        </div>
      </main> 
    </div>
  )
}

export default index
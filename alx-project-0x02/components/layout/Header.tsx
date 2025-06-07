import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
  
      <header className="bg-blue-400 text-white p-4 shadow-lg">
        <div className="container  mx-auto flex items-center p-2">
          <div className="sm:text-lg md:text-xl lg:text-2xl font-bold">
            <Link href="/">My Project</Link>
          </div>
          <nav className='flex-grow flex justify-end sm:mr-10 md:mr-20 lg:mr-40'>
            <ul className="flex space-x-20 items-center">
              <li>
                <Link href="/home" className='hover:underline'>Home</Link>
              </li>
              <li>
                <Link href="/about" className='hover:underline'>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

  )
}

export default Header
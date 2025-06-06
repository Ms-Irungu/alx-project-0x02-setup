import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className=" bg-gray-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link href="/">My Project</Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link href="/about" className='hover:underline'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
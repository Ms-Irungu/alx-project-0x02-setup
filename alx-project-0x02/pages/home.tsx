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
            content="This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs."
          />
          <Card
            title="Learning Objectives"
            content={
              <ul className="list-disc list-inside space-y-1">
                <li>Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS</li>
                <li>Learn to implement basic routing in Next.js using the Pages Router</li>
                <li>Create reusable components with TypeScript interfaces</li>
                <li>Implement interactive UI elements like modals and buttons</li>
                <li>Fetch and display data from external APIs</li>
                <li>Structure a Next.js project following best practices</li>
                <li>Work with component props and state management</li>
                <li>Build responsive layouts with navigation</li>
              </ul>
            }
          />
          <Card
            title="Requirements"
            content={
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js (v16 or later)</li>
                <li>npm or yarn package manager</li>
                <li>Basic knowledge of React and TypeScript</li>
                <li>Familiarity with HTML/CSS</li>
                <li>Git and GitHub account</li>
                <li>Code editor (VS Code recommended)</li>
              </ul>
            }
          />
        </div>
      </main>
    </div>
  )
}

export default home;
import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import { type CardProps } from '@/interfaces'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cards, setCards] = useState([
    {
      title: "Project Overview",
      content: "Get a quick summary of what this project is about and its main objectives."
    },
    {
      title: "Latest News",
      content: "Stay updated with the most recent developments and announcements."
    },
    {
      title: "Get Involved",
      content: "Learn how you can contribute or participate in the project."
    }
  ])

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleAddCard = (data: CardProps) => {
    setCards(prev => [...prev, data])
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='px-2 sm:px-4 md:px-6'>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl font-semibold">Home Page</h1>
          <button
            className="bg-blue-400 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-300 transition"
            onClick={handleOpenModal}
          >
            Add Content
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} content={card.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddCard}
        />
      </main>
    </div>
  )
}

export default Home
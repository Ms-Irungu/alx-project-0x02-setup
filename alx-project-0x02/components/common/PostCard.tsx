import React from 'react'
import { type PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({
    userId,
    title,
    content
}) => {
    return (
        <div className='bg-white max-w-xl mx-auto my-6 p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300'>
            <div>
                <h2 className='text-lg font-semibold mb-2'>{title}</h2>
            </div>
            <p className='text-gray-700 mb-4'>{content}</p>
            <p className='text-sm text-gray-500'>User ID: {userId}</p>
            <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
                Read More
            </button>
        </div>
    )
}

export default PostCard;
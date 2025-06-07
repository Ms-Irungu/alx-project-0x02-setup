import React from 'react'
import { type CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({
    title,
    content
}) => {
    return (
        <div className='max-w-xl bg-blue-300 mx-auto shadow-md rounded-lg overflow-hidden my-4 p-6 hover:shadow-xl transition-shadow duration-300'>
            <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h2>
                {typeof content === 'string' ? (
                    <p className='text-gray-800'>{content}</p>
                ) : (
                    content
                )}
            </div>

        </div>
    )
}

export default Card
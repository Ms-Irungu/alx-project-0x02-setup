import React from 'react'
import { type UserProps } from '@/interfaces'

const UserCard: React.FC<UserProps> = ({
    name,
    email,
    address
}) => {
    return (
        <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <div className="text-gray-700 mb-2">
                <span className="font-semibold text-gray-700">Email:</span>{' '}
                <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
            </div>
            <div className="text-gray-600">
                <span className="font-semibold text-gray-700">Address:</span>{' '}
                <span>
                    {address.street}, {address.suite}, {address.city}, {address.zipcode}, {'{'}
                    {address.geo.lat}, {address.geo.lng}
                    {'}'}
                </span>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                View Profile
            </button>

        </div>
    )
}

export default UserCard;
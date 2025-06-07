import React, { useState } from 'react'
import { type PostModalProps } from '../../interfaces'


const PostModal:React.FC<PostModalProps> = ({
    isOpen,
    onClose,
    onSubmit
}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title && content) {
            onSubmit({ title, content })
            setTitle('')
            setContent('')
            onClose()
        }

    }
    if (!isOpen) return null

  return (
        <div className="fixed inset-0 bg-gray-500 z-10 overflow-y-auto bg-opacity-75 transition-opacity">
            <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Create Post</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor='post-title' className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                    id='post-title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='post-content' className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                    id='post-content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                    rows={4}
                    required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Submit
                </button>
                </form>
                <button
                onClick={onClose}
                className="mt-4 w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                >
                Cancel
                </button>
            </div>
            </div>
        </div>
  )
}

export default PostModal;
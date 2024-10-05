import React from 'react'

export default function About() {
  return (
    <div>
      <div className="relative w-64 bg-white shadow-lg overflow-hidden">
        {/* Inward rounded corner using a pseudo-element */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-br-full transform translate-x-[-50%] translate-y-[-50%] z-10"></div>

        {/* Card Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-900">Card Title</h2>
          <p className="text-gray-700 mt-2">
            This is a card with one corner rounded inward, giving it a unique shape.
          </p>
          <button className="mt-4 px-4 py-2 text-yellow-600 border border-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

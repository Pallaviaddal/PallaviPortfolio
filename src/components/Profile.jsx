import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="relative min-h-110 bg-[url('/profile.png')] bg-cover bg-center" id='profile'>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-110 items-center text-white">
        
        <div className="text-start space-y-5 px-0 lg:px-50">
          
          <h1 className="px-5 md:px-10 bg-gradient-to-r py-2 from-violet-500 to-blue-300 bg-clip-text md:text-5xl text-4xl font-semibold text-transparent sora">
            Pallavi Addala
          </h1>

          <p className="text-lg md:text-xl px-5 md:px-10">
            Full Stack Developer | Computer Science Graduate
          </p>

          <div className="flex justify-start gap-4 pt-4 px-5 md:px-10">
            <Link to='tel:+917032845678' className="rounded-lg md:px-6 py-3 px-4 bg-linear-to-r from-violet-700 from-40% to-blue-500 cursor-pointer">
              Contact Me
            </Link>
            <Link to='https://github.com/pallaviaddal' className="rounded-lg border border-white md:px-6 py-2 px-4 hover:bg-white hover:text-black">
              View GitHub
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile

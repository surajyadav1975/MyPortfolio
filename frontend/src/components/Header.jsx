import React from 'react'

function Header() {
  return (
    <header className="text-white flex justify-center items-center mt-12 mb-12">
        <div id="mobile-menu" className="flex w-96 justify-around items-center border rounded-full border-gray-600">
            <div className= "nav relative flex py-4 w-full rounded-full overflow-hidden">
                <a href="/" className='z-10 w-full text-center'>Home</a>
                <span className='z-100 absolute top-16 w-full h-full bg-gray-600 opacity-40 transition-all duration-500'></span>
            </div>
            <div className= "nav relative flex py-4 w-full rounded-full overflow-hidden">
                <a href="/about" className='z-10 w-full text-center'>About</a>
                <span className='z-100 absolute top-16 w-full h-full bg-gray-600 opacity-40 transition-all duration-500'></span>
            </div>
            <div className= "nav relative flex py-4 w-full rounded-full overflow-hidden">
                <a href="/project" className='z-10 w-full text-center'>Project</a>
                <span className='z-100 absolute top-16 w-full h-full bg-gray-600 opacity-40 transition-all duration-500'></span>
            </div>
            <div className= "nav relative flex py-4 w-full rounded-full overflow-hidden">
                <a href="/contact" className='z-10 w-full text-center'>Contact</a>
                <span className='z-100 absolute top-16 w-full h-full bg-gray-600 opacity-40 transition-all duration-500'></span>
            </div>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex shrink-0 items-center'>
            <a href="/" aria-label='Home' className='font-bold text-3xl'>
              NM
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/nayanmia-dev/" target='blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <FaLinkedin/>
            </a>
            <a href="https://github.com/nayan-mia-09" target='blank' rel='noopener noreferrer' aria-label='GitHub'>
            <FaGithub/>
            </a>
            
        </div>

    </nav>
  )
}

export default Navbar

import React from 'react'
import { EnvelopeIcon} from '@heroicons/react/24/solid'

function About() {
  return (
    <div className='text-white gap-5 border-t border-gray-600 pt-12 mb-16'>
        <div className='-z-10 anime color1 w-96 h-96 opacity-60 blur-3xl shadow-2xl shadow-sky-500 left-96 bg-sky-500 absolute'></div>
        <div className='-z-10 anime color2 w-96 h-96 opacity-60 blur-3xl shadow-2xl shadow-blue-500 scale-125 right-96 bg-blue-500 absolute'></div>
        <div className='-z-10 anime color3 w-96 h-96 opacity-60 blur-3xl shadow-2xl shadow-sky-500 right-96 bg-sky-500 absolute'></div>
        <div className='flex justify-center  items-center gap-5'>
        <div className='w-24 h-24 rounded-full overflow-hidden border border-white '>
            <img src="/images/photo.png" alt="my-photo" className='w-full h-full rounded-full'/>
        </div>
        <div class="space-y-1">
            <h1 class="font-semibold text-xl tracking-tighter sm:text-2xl">Hey, I'm Suraj Yadav👋
            </h1>
            <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ysuraj1191@gmail.com&su=Hello%20Suraj"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5">
                <div class="size-2 rounded-full bg-green-500"></div>
                <div class="relative cursor-pointer overflow-hidden">
                    <p class="group text-muted-foreground">
                        <span class="group-hover:-translate-y-full flex flex-col text-zinc-400 border-b border-dashed transition-all duration-1000 ease-slow">Available for work</span>
                        <span class="group-hover:-translate-y-full absolute text-zinc-400 top-full flex items-center transition-all duration-1000 ease-slow">Reach out
                            <EnvelopeIcon className='w-5 h-5 ml-2'></EnvelopeIcon>
                        </span>
                    </p>
                </div>
            </a>
        </div>
        </div>
        <div className='mt-7 text-center px-4'>
            <p>
            I’m currently in my 6th semester of B.Tech in Computer Science and Engineering from Delhi Technological University (DTU). As a dedicated software developer, I’m committed to expanding my knowledge in programming, with a focus on DSA and web development. I enjoy working on innovative software solutions and collaborating with like-minded individuals to bring ideas to life.
            <a href="https://drive.google.com/file/d/1xARODzIWqCX4kkL14-SpSFKiu2E_-IWH/view?usp=sharing" 
             target="_blank"
             rel="noopener noreferrer"
             className='ml-2 text-orange-200 font-bold text-1xl'>Resume</a>
            </p>
        </div>
    </div>
  )
}

export default About
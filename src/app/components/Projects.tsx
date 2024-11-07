import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Interactive from "../../../public/Assets/Static interactive resume.jpg"
import Dynamic from "../../../public/Assets/dynamic resume.jpg"
import Facebook from "../../../public/Assets/facebook pic.jpg"

const Projects = () => {
  return (
    <div id='project'>
      
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Interactive}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
              Static Interactive resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              STatic Resume
            </h1>
            <p className="leading-relaxed">
             This is Static Interactive resume which I have created for others to take ideas.
            </p>
            <Link href={'https://milestones-sage.vercel.app/'} target='_blank'>
            <p className="leading-relaxed hover:underline  text-orange-500" >
            View project..
            </p>
            </Link>
          </div>
        </div>
      </div>
   
    {/* projects */}
    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Dynamic}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
              Dynamic Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Dynamic Resume
            </h1>
            <p className="leading-relaxed">
             This is Dynamic resume which I have created to generate resume.
            </p>
            <Link href={'https://milestone-3-rouge-gamma.vercel.app/'} target='_blank'>
            <p className="leading-relaxed hover:underline  text-orange-500" >
            View project..
            </p>
            </Link>
          </div>
        </div>
      </div>

       {/* projects */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Facebook}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
             Facebook Clone Page
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Facebook clone
            </h1>
            <p className="leading-relaxed">
            I have created Facebook Clone Page for my own practice.
            </p>
            <Link href={'https://facebook-clone-seven-mu.vercel.app/'} target='_blank'>
            <p className="leading-relaxed hover:underline  text-orange-500" >
            View project..
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
. 
    </div>
  )
}

export default Projects

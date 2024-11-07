import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoCloudDownloadSharp } from "react-icons/io5";
import logo from"../../../public/Assets/logo.jpeg"
const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-5'>
      <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center z-auto sticky-top">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <Image  src={logo}width ={100} height={100} alt="logo"
   className='w-[50] rounded-full'
   />
      <span className="ml-3 text-3xl">Warisha Naz</span>
    </a>
    <nav className="md:mr-auto md:ml-auto md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 text-2xl hover:text-orange-600"> Home</Link>
      <Link href={'#about'}className="mr-5  text-2xl hover:text-orange-600">About</Link>
      <Link href={'#skills'}className="mr-5 text-2xl hover:text-orange-600">Skills</Link>
      <Link href={'#project'}className="mr-5 text-2xl hover:text-orange-600">Projects</Link>
      <Link href={'#Contact'}className="mr-5  text-2xl hover:text-orange-600">Contact</Link>
    </nav>
    <a href='/Assets/CV warisha Naz.pdf'>
    <button className="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-base mt-4 md:mt-0"> 
      Download CV
      <IoCloudDownloadSharp className='text-lg ml-2'/>
    </button>
    </a>
  </div>
</header>

    </div>
  )
}

export default Navbar

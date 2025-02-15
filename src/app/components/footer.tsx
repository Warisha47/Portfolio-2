import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/Assets/logo.jpeg"

const Footer = () => {
  return (
    <div className='bg-orange-50'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image  src={Logo}width ={100} height={100} alt="logo"
   className='w-[50] rounded-full'
   />
      <span className="ml-3 text-xl">Warisha Naz</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2020 Warisha Naz 
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='_blank'
       href={"https://www.instagram.com/aris.ha4/"} className="text-gray-500">
     < IoLogoInstagram className='text-3xl hover:text-red-500' />
      </Link>

    </span>
  </div>
</footer>

      
    </div>
  )
}

export default Footer

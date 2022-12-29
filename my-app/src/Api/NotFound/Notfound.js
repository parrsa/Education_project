import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
<main class="h-screen w-full flex flex-col justify-center items-center bg-[#9161F8]">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div class="bg-[#ffffff] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<Link to="/"><button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-[#fffdfc] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span class="relative block px-8 py-3 rounded-lg bg-[#562fa9]">
          Go Home
        </span>
      </a>
    </button></Link>
</main>
    </div>
  )
}

export default Notfound
import React from 'react'

const Footer = () => {
  return (
<footer class="p-4  bg-slate-50 flex h-20 justify-center   shadow-violet-800 shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span class=" text-base sm:text-center">© 2022 <a href="http://westco.ir/" class="hover:underline">westco.ir</a>
    </span>
    <ul class="flex flex-wrap absolute items-center mt-7 text-sm text-black ">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

  )
}

export default Footer
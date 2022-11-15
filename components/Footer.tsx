import React from 'react'

function Footer() {
  return (
    
      
<footer class="p-4   shadow md:flex md:items-center md:justify-between md:p-6 bg-black">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/#" class="hover:underline">The Farm</a>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
            <a href="/Landing" class="mr-4 hover:underline md:mr-6">Home</a>
        </li>
        <li>
            <a href="/About" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="/Details" class="mr-4 hover:underline md:mr-6">Service</a>
        </li>
       
        <li>
            <a href="/Contact" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

   
  )
}

export default Footer

import React from 'react';


const Header = () => {
  const scrollToTarget = (item) => {
 const id=document.getElementById(item);
 if(id){
  id.scrollIntoView({behavior:"smooth",block:"start"})
 }

  }
  return (
   <div>
   <header class="flex flex-wrap sm:justify-start w-full bg-tranparent opacity-75   bg-black text-sm py-4 fixed top-0 z-40">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div class="flex items-center justify-between">
      <img className='h-[60px] w-[60px] mix-blend-screen' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROODJw3XJUrNG_RU-pYEXaLon3Mtu-bT7bIw&s' alt='#'></img>
      <div class="sm:hidden">
       
      </div>
    </div>
    <div id="navbar-image-and-text-1" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div class="flex flex-col  gap-5 mt-5  sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        <span class=" text-lg text-yellow-500" onClick={()=>scrollToTarget("Home")}>Home</span>
        <span class=" text-lg text-white  hover:text-yellow-600" onClick={()=>scrollToTarget("about")}>About</span>
        <span class=" text-lg text-white hover:text-yellow-600" onClick={()=>scrollToTarget("Vision")}>Vision</span>
        <span class="text-lg text-white hover:text-yellow-600"  onClick={()=>scrollToTarget("show")}>Show</span>
        <span class=" text-lg text-white hover:text-yellow-600" onClick={()=>scrollToTarget("contact")} >Contact </span>
      </div>
    </div>
  </nav>
</header>

   </div>
   
  )
}

export default Header;

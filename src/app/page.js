"use client";


import { Roboto } from "next/font/google";
import { useState } from 'react';

export default function Home() {

   const [waifuImage, setWaifuImage] = useState('');

  const fetchWaifu = async () => {
    try {
      const response = await fetch('https://api.waifu.pics/sfw/waifu');
      const data = await response.json();
      setWaifuImage(data.url);
    } catch (error) {
      console.error('Error fetching waifu:', error);
    }
  };


  return (



<div class="flex justify-center items-center">
<div class="min-h-screen grid place-content-top">
    <div class=" w-full h-15   grid place-content-center align-middle">
       <button class=" bg-white w-50 h-10 rounded-lg  shadow-  absolute right-10 top-2 outline-gray-300 outline-1 hover:shadow-lg">
<h1 class="font-bold font-sans" alt="belom lagi">My other projects</h1> 

       </button>
<h1 class="font-bold  text-xl font-sans absolute top-3 left-10 ">Waifu <p>Randomiser</p></h1>

    </div>
  </div>


  <h1 class="text-4xl font-bold text-center absolute bottom-90">Anime Waifu Randomiser<p>By lilnaqi</p></h1>
  <button class="outline-1 bg w-40 h-20 rounded-xl absolute bottom-30 text-2xl  hover:bg-black hover:text-white " onClick={fetchWaifu}> Show me a Waifu</button>
  <img src={waifuImage}  alt="a" className="absolute top-30  w-70 h-70 rounded-full "></img>
</div>  
  );
}

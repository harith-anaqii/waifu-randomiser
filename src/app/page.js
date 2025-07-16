"use client";

import { useState } from "react";

export default function Home() {
  const [waifuImage, setWaifuImage] = useState("");
  const [loading, setLoading] = useState(false);


  const fetchWaifu = async () => {
    try {
        setLoading(true); // start spinner
      const response = await fetch("https://api.waifu.pics/sfw/waifu");
      const data = await response.json();
      setWaifuImage(data.url);
    } catch (error) {
      console.error("Error fetching waifu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-xl outline-1 outline-gray-700">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="https://portfolio-mu-lyart-52.vercel.app">Portfolio</a>
              </li>
              <li>
                <a href="https://github.com/harith-anaqii/waifu-randomiser">Contribute</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl rounded-2xl">Waifu Randomiser😸</a>
        </div>
        <div className="navbar-end">
           <img
           className="w-10 h-10"
            alt="Tailwind CSS Navbar component"
            src="favicon.ico" /> 
        </div>
      </div>

      {/* Centered Card */}
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card bg-base-100 shadow-xl w-96 outline-1 outline-gray-700 shadow-xl">
  <figure className="flex justify-center p-4 min-h-[200px]">
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : waifuImage ? (
              <img
                src={waifuImage}
                alt="waifu"
                className="rounded"
                onLoad={() => setLoading(false)}
              />
            ) : (
              <p>No waifu yet.😔</p>
            )}
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title text-center text-2xl">Waifu Randomiser</h2>
            <p>Click the button to fetch a new one 👇</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary rounded-lg" onClick={fetchWaifu}>
                Get me a picture of a waifu
              </button>
            </div>
          </div>
        </div>
      
      
      </div>


      
      {/* Footer */}
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <img
           className="w-10 h-10"
            alt="Tailwind CSS Navbar component"
            src="favicon.ico" />
          
            <p className="text-2xl font-bold">Waifu Randomiser</p>
            <br />
            By HARITH ANAQI <p></p>EST 2025
        </aside>
        <nav>
          <h6 className="footer-title">Socials</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/harith_anaqii?igsh=MTc0cTQ1aTBpMnhiMA==">
              INSTAGRAM
            </a>
            <a href="#">FACEBOOK</a>
            <a href="https://portfolio-mu-lyart-52.vercel.app">
              PORTFOLIO
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

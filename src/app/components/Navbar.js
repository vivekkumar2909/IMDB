// import React from 'react'

// export default function Navbar() {
//   return (
//     <div className='flex gap-10 justify-between bg-slate-400  items-center  font-bold text-2xl h-20 hover:cursor-pointer dark: bg-smoke-600 '>
//       <div className=' ml-60  hover:text-amber-500'>
//         Trending
//       </div>
//       <div className=' mr-60  hover:text-amber-500  '>
//         Latest
//       </div>
//     </div>
//   )
// }/


import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-between  dark:bg-gray-600 bg-gray-200 lg:text-lg p-4 border border-black">
      <NavbarItem title="Trending" param="fetchTrending"  />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

import React from 'react'

const Sidebar = () => {

  return (
    <div className="p-5 pl-10 text-lg shadow-lg w-60 fixed bg-white">
      <ul className="border-b-gray-300">
        <li className="font-bold pb-1">Home</li>
        <li className="font-bold pb-1">Shorts</li>
        <li className="font-bold pb-1">Videos</li>
        <li className="font-bold pb-1">Live</li>
      </ul>
      <h1 className="font-bold pt-4 pb-2">Subscriptions</h1>
      <ul className="ml-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 pb-2">Explore</h1>
      <ul className="ml-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 pb-2">Watch Later</h1>
      <ul className="ml-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>  
    </div>
  )
}

export default Sidebar;
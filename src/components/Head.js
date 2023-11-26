import React from 'react'
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="top-0 grid grid-flow-col py-4 px-5 w-full shadow-lg fixed bg-white">
        <div className="flex col-span-1">
            <img className="h-8 cursor-pointer"
            onClick={() => toggleMenuHandler()} 
                alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" />  
            <img className="h-8 mx-4" 
                alt="youtube-logo" src="https://www.shutterstock.com/image-vector/lviv-ukraine-june-1-2023-260nw-2311976863.jpg" />  
        </div>
        <div className="col-span-10 ml-48 px-10">
            <input className="w-1/2 border border-gray-500 rounded-l-full" type="text" />
            <button className="border px-2 bg-gray-100 border-gray-500 rounded-r-full" >Search</button>
        </div>
        <div className="col-span-1">
            <img className="h-8" 
                alt="user-icon" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
        </div>
    </div>
  )
}

export default Head;
import React from 'react'
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";


const MainContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`mt-2 ml-2 ${isMenuOpen ? 'ml-64' : 'ml-28'}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;
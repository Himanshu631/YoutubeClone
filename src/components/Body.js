import React from 'react'
import SidepanelControl from "./SidepanelControl";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex mt-16">
        <SidepanelControl />
        <MainContainer />
    </div>
  )
}

export default Body;
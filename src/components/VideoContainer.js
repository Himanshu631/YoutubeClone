import React from 'react'
import { useEffect,useState } from "react";
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const [videos, setvideos] = useState([]);
  
  useEffect(() => {
    getvideos() 
  }, []);

  
  const getvideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setvideos(json.items);
  };
  
  return (
    <div className={`ml-4 mt-4 flex flex-wrap`}>
      {videos.map((video) => (
          <VideoCard key={video.id} info={video}/>
        ))};
    </div>
  )
}

export default VideoContainer;
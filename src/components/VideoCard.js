import React from 'react';

const VideoCard = ({ info }) => {
    
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  
    const maxLength = 37;
    const truncatedTitle =
      title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  
    return (
      <div className="mr-4 cursor-pointer mb-10 p-3">
        <div>
          <img
            className="rounded-lg hover:rounded-none h-52"
            alt="thumbnail"
            src={thumbnails.medium.url}
          />
        </div>
        <div className="flex flex-col mt-2">
          <h3 className="text-sm font-medium truncate">{truncatedTitle}</h3>
          <p className="text-xs text-gray-500">{channelTitle}</p>
          <p className="text-xs text-gray-500">{statistics.viewCount} views</p>
        </div>
      </div>
  );
};

export default VideoCard;

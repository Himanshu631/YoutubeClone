import React from 'react';

const CollapsedSidebar = () => {

  return (
    <div className="text-lg w-24 fixed bg-white">
        <div className="h-full fixed left-0 bottom-0 top-20 px-1">
            <div className="py-4 text-center flex flex-col justify-center items-center">
                <img className="h-8" 
                    alt="home" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
                <h1 className="text-sm">Home</h1>    
            </div>
            <div className="py-4 text-center flex flex-col justify-center items-center">
                <img className="h-8" 
                    alt="home" src="https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png" />
                <h1 className="text-sm">Shorts</h1>    
            </div>
            <div className="py-4 text-center flex flex-col justify-center items-center">
                <img className="h-8" 
                    alt="home" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png" />
                <h1 className="text-sm">Subscriptions</h1>    
            </div>
            
            <div className="py-4 text-center flex flex-col justify-center items-center">
                <img className="h-8" 
                    alt="home" src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/youtube-480.png" />
                <h1 className="text-sm">You</h1>
            </div>
        </div>
    </div>
  )
};

export default CollapsedSidebar;
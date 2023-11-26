import React from 'react'

const Button = ({btnname}) => {
  return (
    <div className="">
        {btnname.map((item, index) => (
          <button key={index} className="p-1 mr-4 hover:bg-black hover:text-white rounded-md bg-gray-200 px-2">
            {item}
        </button>
        ))}
    </div>
  )
}

export default Button;
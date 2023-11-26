import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const btnitems = ["All","JavaScript","Spring","DBMS","Striver","MS Dhoni","Krishna", "ReactJS", "TailWind","Narendra Modi","Virat Kohli", "Hibernate","Arijit", "Vue"]

  return (
    <div className="my-1 flex">
      <Button btnname={btnitems}/>
    </div>
  )
}

export default ButtonList;
import React from 'react'
import dishPic from "../../assets/dish.jpg"

const Menu = () => {
  return (
    <div className='text-center'>
        <h1>Today's menu</h1>
        <h4>Today's menu hasn't been set. Please come back later.</h4>
        <img src={dishPic} className='w-25 shadow'></img>
    </div>
  )
}

export default Menu

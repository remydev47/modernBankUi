import React from 'react'

const Button = ({ styles }) => {
  return (
   <button type="button" className={`${style.container} ${styles}`}>
    Get Started
   </button>
  )
}

export default Button


const style = {
    container:`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none cursor-pointer rounded-xl`
}
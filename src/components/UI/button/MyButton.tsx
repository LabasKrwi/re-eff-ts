import React, { FC } from 'react'
import { MyButtonProps } from '../UITypes/Types'
import classes from './MyButton.module.css'



const MyButton:FC<MyButtonProps> = ({children, ...props}) => {
    
  return (
    <button  className={classes.myBtn} {...props}>
        {children}
    </button>
  )
}

export default MyButton
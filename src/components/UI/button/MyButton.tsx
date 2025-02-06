import { FC } from 'react'
import classes from './MyButton.module.css'



const MyButton:FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props}) => {
    
  return (
    <button className={classes.myBtn} {...props}></button>
  )
}

export default MyButton
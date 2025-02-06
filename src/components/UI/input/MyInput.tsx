import React, {  Ref } from 'react'
import classes from './MyInput.module.css'
const MyInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({...props}, ref: Ref<HTMLInputElement>) => {
  return (
    <input  ref={ref} className={classes.myInput} {...props}/>
  );
});

export default MyInput
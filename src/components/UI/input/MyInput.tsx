import React, {  Ref } from 'react'
import { MyInputProps } from '../UITypes/Types';
import classes from './MyInput.module.css'
const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(({placeholder, ...props}, ref: Ref<HTMLInputElement>) => {
  return (
    <input ref={ref} {...props} className={classes.myInput} type="text" placeholder={placeholder}/>
  );
});

export default MyInput
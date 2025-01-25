import { FC } from 'react'
import { MySelectProps } from '../UITypes/Types'

const MySelect:FC<MySelectProps> = ({options, defaultValue, value, onChange}) => {

  return (
    <select
        value={value}
        onChange={onChange ? event => onChange(event.target.value) : ()=> {}}
    >
        <option value={value} disabled>{defaultValue}</option>
        {options.map(option => 
            <option key={option.value} value={option.value}>{option.name}</option>
        )}
    </select>
  )
}

export default MySelect
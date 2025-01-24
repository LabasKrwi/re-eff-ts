import React, { FC, useState } from 'react'


const MyInput: FC= () => {
        const [inputValue, setInputValue] = useState<string>('Текст в ипуте');
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value)
        };
    return (
        <div>
            <h1>{inputValue}</h1>
            <input 
                type="text" 
                onChange={handleChange}
                value={inputValue}
            />
        </div>
    )
}

export default MyInput
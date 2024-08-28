import React from 'react'
import { useState, useRef, useEffect } from "react";

const login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value={'submit'} />
        </form>
    )
}

export default login
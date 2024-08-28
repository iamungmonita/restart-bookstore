import React from 'react'
import { Header } from '..'
const index = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default index
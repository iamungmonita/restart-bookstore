import React from 'react'
import Link from 'next/link'
const index = () => {
    return (
        <header className='font-nanum text-xl font-semibold text-slate-500'>
            <div className='flex items-center justify-between p-5'>
                <div className='flex gap-x-5'>
                    <Link href={'/auth/login'}>LOGIN</Link>
                    <Link href={'/'}>Login</Link>
                    <Link href={'/'}>Login</Link>
                </div>
                <p className='font-nanum text-4xl font-extrabold'>Kampuchea</p>
                <div>search</div>
                <div>login</div>
                <button className='bg-slate-200 py-2 px-10'>SHOP</button>
            </div>
        </header>
    )
}

export default index
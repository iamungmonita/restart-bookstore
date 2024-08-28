import classNames from 'classnames'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
const index = ({ name, pathname, img, arr }) => {
    const ref = useRef()
    const router = useRouter()
    const [toggle, setToggle] = useState(false)
    const outside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setToggle(false)
        }
    }
    useEffect(() => {
        window.addEventListener('mouseover', outside)
        return () => {
            window.removeEventListener('mouseover', outside)
        }
    }, [])

    const typeClass = classNames('border-x border-slate-200')

    return (
        <Link href={`/${pathname}`} ref={ref} className='flex z-10'>
            <div className={classNames('relative flex', typeClass)}>
                <div
                    onMouseOver={() => setToggle(!toggle)}
                    className='py-2 w-48 text-center flex items-center justify-center gap-5'>
                    {img && <span> <img src={img} alt="" width={20} /></span>} {name}
                </div>
                <div>
                    <div className={`absolute ${toggle ? 'top-[100%] opacity-100' : 'top-[90%] opacity-0'} duration-300 transition-all shadow bg-slate-200 left-0`}>
                        {arr && arr.map((lang) => <div className='py-2 hover:bg-slate-100 flex gap-5 justify-start items-center border w-48 p-5'>
                            {lang.link && <p onClick={() => router.push('potato')}>{lang.name}</p>}
                            {lang.button && <button type={lang.button}>{lang.name}</button>}
                            {lang.img &&
                                <img src='./logo192.png' alt='logo' width={20} height={20} />}
                        </div>)}
                    </div>
                </div>
            </div>

        </Link >

    )
}

export default index
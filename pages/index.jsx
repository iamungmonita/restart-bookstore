
import { Inter } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { XMarkIcon, Bars3Icon, BookOpenIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const inter = Inter({ subsets: ["latin"] });
import Link from 'next/link'
import { Dropdown } from "@/src/components";
export default function Home() {
  const [toggle, setToggle] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [screen, setScreen] = useState(null)

  const ref = useRef(null)

  const outsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', outsideClick)
    return () => {
      document.removeEventListener('click', outsideClick)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreen(window.innerWidth)
    })
  }, [screen])

  useEffect(() => {
    if (screen > 768) {
      setToggle(false)
    }
  })
  const books = [
    { id: 1, name: "Ugly Love", link: 'ugly-love', pathname: '' },
    { id: 2, name: "November 9", link: 'november-9', pathname: '' },
  ]
  return (
    <main className={`font-nanum text-xl p-5 max-w-7xl mx-auto`}>
      <header className=" flex justify-between items-center gap-x-10">
        <div>logo</div>
        <div className="flex">
          <Dropdown name="merchandises" arr={books} pathname={'books'} />
        </div>
        <MagnifyingGlassIcon height={20} width={30} className="text-slate-600 md:hidden p-2" />
        <div className="w-full items-center gap-x-5 bg-slate-200 hidden md:flex px-5 rounded-lg">
          <BookOpenIcon height={20} width={20} className="text-slate-600" />
          <input type="text" className=" bg-slate-200 w-full p-2  outline-none" placeholder="search book..." />
        </div>
      </header>
      <aside ref={ref}>
        <Bars3Icon
          onClick={() => setToggle(true)}
          height={30} width={30} className={`float-right ${toggle && 'hidden'} md:hidden`} />
        <div className={`flex justify-between items-top p-5 bg-slate-200 w-3/4 h-full absolute top-0 animation duration-500 ${toggle ? "left-0" : "-left-[100%]"}`}>
          this is sidebar
          <XMarkIcon
            onClick={() => setToggle(false)}
            height={30} width={30} className="" />
        </div>
      </aside>
    </main >
  );
}

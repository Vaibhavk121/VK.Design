import React, { useState } from 'react';

const links=[
    {name:"Home",href:"#home"},
    {name:"About",href:"#about"},
    {name:"Features",href:"#features"},
    {name:"Contact",href:"#contact"}
]

export default function Navbar(){
    const[open,setopen]=useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm rounded-b-xl">
            <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
               <a href="#home" className="flex items-center gap-3 text-2xl font-black tracking-tight hover:text-blue-700 transition-colors duration-200">
  <img
    src="/logo.png"
    alt="VK.Design Logo"
    className="w-9 h-9 rounded-full shadow-md border-2 border-blue-600 bg-white object-cover"
  />
  VK.Design
</a>
                {/* desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l)=>(
                        <a
  key={l.name}
  href={l.href}
  className="text-base font-medium px-2 py-1 rounded hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
>
  {l.name}
</a>
                    ))}
                    <a
  href="#contact"
  className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2 text-base font-semibold shadow hover:bg-blue-700 transition-colors duration-150"
>
  Get Started
</a>
                </nav>

                {/* Mobile Toggle */}
                <button
                onClick={()=>setopen((v)=>!v)}
                className='md:hidden inline-flex items-center justify-center p-2 rounded-lg border hover:bg-gray-50'
                aria-label='Toggle menu'>
                    {!open?(
                        // hamburger
                        <svg width="22" height="22" viewBox='0 0 24 24' fill='none'>
                            <path d="M4 6h16M4 12h16M4 18h16" stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>    
                    ):(
                        <svg width="22" height="22" viewBox='0 0 24 24' fill='none'>
                            <path d="M6 6l12 12M18 6l-12 12" stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg> 
                    )}
                </button>
                    </div>
                    {/* Mobile Menu */}
                    {open && (
                        <nav className="md:hidden border-t bg-white rounded-b-xl shadow">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
  key={l.name}
  href={l.href}
  onClick={() => setOpen(false)}
  className="py-2 px-2 rounded hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
>
  {l.name}
</a>
            ))}
            <a
  href="#contact"
  onClick={() => setOpen(false)}
  className="mt-2 inline-flex w-full justify-center rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-150"
>
  Get Started
</a>
          </div>
        </nav>
                    )}
            
        </header>
    )
}
'use client';

import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchCircleOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

import { SidebarLink } from './SidebarLink';
import { useUIStore } from '@/store';
import clsx from 'clsx';

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );
    
  return (
    <div>
        {/** Background */}
        {
          isSideMenuOpen && (
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"/>
          )  
        }
        {/** Blur */}
        {
          isSideMenuOpen && (
            <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" onClick={ closeMenu }/>
            )  
        }
        {/** SideMenu */}
        <nav className={
            clsx(
                "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow2xl transform transition-all duration-300",
                {
                    "translate-x-full": !isSideMenuOpen
                }
            )
        }>
          <IoCloseOutline size={ 50 } className="absolute right-5 cursor-pointer" onClick={ closeMenu }/>
          {/** Input */}
          <div className="relative mt-14">
            <IoSearchOutline size={ 20 } className="absolute top-2 left-2"/>
            <input 
              type="text"
              placeholder="Buscar"
              className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/** Menu Links*/}
          <SidebarLink href="/" icon={<IoPersonOutline size={ 30 } />} text="Perfil" />
          <SidebarLink href="/" icon={<IoTicketOutline size={ 30 } />} text="Ordenes" />
          <SidebarLink href="/" icon={<IoLogInOutline size={ 30 } />} text="Ingresar" />
          <SidebarLink href="/" icon={<IoLogOutOutline size={ 30 } />} text="Salir" />

          {/** Line Separator */}
          <div className="w-full h-px bg-gray-200 my-10" />

          <SidebarLink href="/" icon={<IoShirtOutline size={ 30 } />} text="Productos" />
          <SidebarLink href="/" icon={<IoTicketOutline size={ 30 } />} text="Ordenes" />
          <SidebarLink href="/" icon={<IoPeopleOutline size={ 30 } />} text="Usuarios" />
        </nav>
    </div>
  )
}

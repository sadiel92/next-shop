import Link from 'next/link';
import React, { ReactElement } from 'react'

interface Props {
    href: string;
    icon: ReactElement;
    text: string;
}

export const SidebarLink = ({href, icon, text}: Props) => {
  return (
    <Link href="/" className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
    {icon}
    <span className="ml-3 text-xl">{ text }</span>
  </Link>
  )
}

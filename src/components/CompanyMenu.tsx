import * as React from 'react'
import { Menu } from '@headlessui/react'
import { Briefcase, ChevronDown, Newspaper, Users } from "lucide-react";
import { cn } from '../lib/utils';


export default function CompanyMenu() {
  const [hovered, setHovered] = React.useState(false)

  console.log('hovered', hovered)

  return (
    <div
      className='relative hover:cursor-default group flex items-center'>
      <span className='mr-1'>Company</span>
      <ChevronDown size='14' className='group-hover:rotate-180 transition-all' />
      <ul
        aria-hidden={!hovered}
        className={cn(
          'absolute z-50 pointer-events-none top-full -left-1/2 w-[200px] bg-gray-900 border border-gray-700 rounded-lg p-2 group-hover:block visible group-hover:pointer-events-auto',
          hovered ? 'visible pointer-events-auto' : 'pointer-events-none invisible',
        )}
      >
        <li
          className='transition-colors'
        >
          <a className="flex items-center" href='#'>
            <Users size='14' />
            <span className='ml-2'>About</span>
          </a>
        </li>
        <li
          className='p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 cursor-pointer rounded-md transition-colors'
        >
          <a className="flex items-center" href='#'>
            <Newspaper size='14' />
            <span className='ml-2'>Blog</span>
          </a>
        </li>
        <li
          className='p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 cursor-pointer rounded-md transition-colors'
        >
          <a className="flex items-center" href='#'>
            <Briefcase size='14' />
            <span className='ml-2'>Careers</span>
          </a>
        </li>
      </ul>
    </div >
  )
}
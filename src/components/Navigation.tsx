import { Briefcase, ChevronDown, Hexagon, Newspaper, Users } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from './ui/NavigationMenu';
import CtaButton from './ui/CtaButton';
import NavLink from './ui/NavLink';

export default function Navigation() {
  return (
    <header className='z-50 h-12 bg-transparent flex items-center fixed inset-0 mx-auto'>
      <div
        className='absolute top-0 w-full h-16 backdrop-blur-md [mask-image:linear-gradient(to_bottom,_black_3rem,_transparent)]'
      >
      </div>
      <NavigationMenu className='container font-semibold w-full h-12'>
        <NavigationMenuList className='text-sm border-b border-b-white/10 flex items-center gap-7 h-12 font-semibold'>
          <NavigationMenuItem>
            <a href='#' className='flex items-center'>
              <Hexagon className='fill-slate-300 stroke-none' />
              <span className='ml-1 text-base'>!Linear</span>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink href='#'>Features</NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink href='#'>Method</NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink href='#'>Pricing</NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="flex items-center hover:text-gray-400 transition-all">
              <span className='mr-1'>Company</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className='p-2'>
              <ul className="w-[200px]">
                <NavigationMenuItem
                  className='p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 cursor-pointer rounded-md transition-all'
                >
                  <NavigationMenuLink className="flex items-center" href='#'>
                    <Users size='14' />
                    <span className='ml-2'>About</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className='p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 cursor-pointer rounded-md transition-colors'
                >
                  <NavigationMenuLink className="flex items-center" href='#'>
                    <Newspaper size='14' />
                    <span className='ml-2'>Blog</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className='p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 cursor-pointer rounded-md transition-colors'
                >
                  <NavigationMenuLink className="flex items-center" href='#'>
                    <Briefcase size='14' />
                    <span className='ml-2'>Careers</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className='ml-auto'>
            <NavLink href='#'>Log in</NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <CtaButton size='sm'>Sign up</CtaButton>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
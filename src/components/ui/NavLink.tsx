import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const navLink = cva('h-12 leading-[3rem] inline-block transition-colors hover:text-gray-400')

export interface NavLinkProps extends React.ComponentProps<'a'>,
  VariantProps<typeof navLink> { }

export default function NavLink({ className, children, ...rest }: NavLinkProps) {
  return (
    <a href='#' className={navLink({ className })} {...rest}>
      {children}
    </a>
  )
}
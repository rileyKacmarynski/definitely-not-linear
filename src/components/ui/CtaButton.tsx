import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const button = cva(
  'cursor-pointer relative -z-1 rounded-full text-white font-semibold tracking-loose items-center inline-flex bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ',
  {
    variants: {
      size: {
        sm: [
          'drop-shadow-lg',
          'px-4',
          'py-[0.375rem]',
          'hover:shadow-[0px_2px_20px_rgba(79,70,229,50%)]',
          'hover:[text-shadow:0px_2px_20px_rgba(0,0,0,60%)]',
        ],
        lg: [
          'drop-shadow-xl',
          'px-6',
          'py-3',
          'hover:shadow-[0px_5px_50px_rgba(79,70,229,50%)]',
          'hover:[text-shadow:0px_2px_20px_rgba(0,0,0,60%)]',
        ],
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
);

export interface CtaButtonProps extends React.ComponentProps<'a'>,
  VariantProps<typeof button> { }

export default function CtaButton({ size, children, className = '', ...rest }: CtaButtonProps) {
  return (
    <a href='#' className={button({ size, className })} {...rest}>
      {children}
    </a>
  )
}
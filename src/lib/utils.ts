// shamelessly pulled from this great repo:
// https://github.com/shadcn/ui/blob/main/apps/www/lib/utils.ts
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

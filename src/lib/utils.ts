import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export function merge(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}
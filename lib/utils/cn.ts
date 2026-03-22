import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Mescla nomes de classes com resolução de conflitos compatível com Tailwind */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className='sticky top-0 bg-white border-b border-b-gray-200 mb-16 lg:mb-24'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between'>
        <Link href='/'>
          <img className='w-44' src='/logo.svg' alt='Logo ExtraCorp' />
        </Link>
        <ul
          className={cn(
            'hidden lg:flex lg:flex-row items-center gap-6 lg:static lg:w-auto lg:h-auto',
            isOpen &&
              'absolute top-20 left-0 flex flex-col justify-center w-full h-[calc(100dvh-80px)] bg-white'
          )}
        >
          <li>
            <Link
              className='text-base text-gray-700 hover:text-blue-700 transition-all duration-300'
              href='/'
            >
              Funkcje
            </Link>
          </li>
          <li>
            <Link
              className='text-base text-gray-700 hover:text-blue-700 transition-all duration-300'
              href='/'
            >
              Cennik
            </Link>
          </li>
          <li>
            <Link
              className='text-base text-gray-700 hover:text-blue-700 transition-all duration-300'
              href='/'
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className='text-base text-gray-700 hover:text-blue-700 transition-all duration-300'
              href='/'
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              className='text-base inline-block font-medium text-gray-700 border border-gray-300 shadow-md shadow-gray-300/50 rounded-lg px-6 py-2 hover:bg-gray-50 transition-all duration-300'
              href='/'
            >
              Zaloguj się
            </Link>
          </li>
          <li>
            <Link
              className='text-base inline-block font-medium text-white shadow-md shadow-blue-700/50 bg-blue-700 rounded-lg px-6 py-2 hover:bg-blue-800 transition-all duration-300'
              href='/'
            >
              Stwórz konto
            </Link>
          </li>
        </ul>
        <button
          className='space-y-2 lg:hidden'
          onClick={handleToggleOpen}
          aria-label='Przycisk menu'
        >
          <span
            className={cn(
              'h-0.5 w-8 bg-gray-900 block rounded-lg',
              isOpen && '-translate-x-1'
            )}
          ></span>
          <span
            className={cn(
              'h-0.5 w-8 bg-gray-900 block rounded-lg',
              isOpen && 'translate-x-1'
            )}
          ></span>
          <span
            className={cn(
              'h-0.5 w-8 bg-gray-900 block rounded-lg',
              isOpen && '-translate-x-1'
            )}
          ></span>
        </button>
      </div>
    </nav>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function Pricing() {
  return (
    <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 mb-16 lg:mb-24'>
      <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter text-center text-gray-900 mb-4'>
        Dostosuj plan do <span className='text-blue-700'>swoich potrzeb</span>
      </h2>
      <p className='text-lg text-gray-700 mb-12 text-center'>
        Wybierz plan, który najlepiej pasuje do Twojej firmy.
      </p>
      <div className='flex justify-center gap-8 flex-wrap'>
        <Plan>
          <div className='p-5 space-y-4 mb-2'>
            <span className='text-lg text-gray-700 font-medium'>
              Podstawowy
            </span>
            <div className='space-x-2'>
              <span className='text-6xl font-medium text-gray-900'>30ZŁ</span>
              <span className='text-base text-gray-700'>mies.</span>
            </div>
            <p className='text-base text-gray-700'>Do 10 pracowników</p>
            <Link
              className='block text-center text-lg font-medium text-white bg-blue-700 shadow-md shadow-blue-700/50 rounded-lg px-6 py-3 hover:bg-blue-800 transition-all duration-300'
              href='/'
            >
              Wybierz pakiet
            </Link>
          </div>
          <hr className='border-t border-t-gray-200 mb-2' />
          <div className='p-5'>
            <p className='text-base font-medium mb-4'>SZCZEGÓŁY</p>
            <ul className='space-y-3'>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Dostęp do podstawowych funkcji
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Podstawowa analityka i raporty
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                20GB dla każdego pracownika
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Podstawowa opiekta techniczna
              </li>
            </ul>
          </div>
        </Plan>
        <Plan>
          <div className='p-5 space-y-4 mb-2'>
            <div className='flex justify-between items-center'>
              <span className='text-lg text-gray-700 font-medium'>
                Rozszerzony
              </span>
              <span className='text-sm text-blue-700 bg-blue-50 border border-blue-500 rounded-full px-3 py-0.5'>
                Popularny
              </span>
            </div>
            <div className='space-x-2'>
              <span className='text-6xl font-medium text-gray-900'>40ZŁ</span>
              <span className='text-base text-gray-700'>mies.</span>
            </div>
            <p className='text-base text-gray-700'>Do 25 pracowników</p>
            <Link
              className='block text-center text-lg font-medium text-white bg-blue-700 shadow-md shadow-blue-700/50 rounded-lg px-6 py-3 hover:bg-blue-800 transition-all duration-300'
              href='/'
            >
              Wybierz pakiet
            </Link>
          </div>
          <hr className='border-t border-t-gray-200 mb-2' />
          <div className='p-5'>
            <p className='text-base font-medium mb-4'>SZCZEGÓŁY</p>
            <ul className='space-y-3'>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Dostęp do podstawowych funkcji
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Podstawowa analityka i raporty
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                20GB dla każdego pracownika
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Podstawowa opiekta techniczna
              </li>
            </ul>
          </div>
        </Plan>
        <Plan>
          <div className='p-5 space-y-4 mb-2'>
            <span className='text-lg text-gray-700 font-medium'>Premium</span>
            <div className='space-x-2'>
              <span className='text-6xl font-medium text-gray-900'>60ZŁ</span>
              <span className='text-base text-gray-700'>mies.</span>
            </div>
            <p className='text-base text-gray-700'>Do 100 pracowników</p>
            <Link
              className='block text-center text-lg font-medium text-white bg-blue-700 shadow-md shadow-blue-700/50 rounded-lg px-6 py-3 hover:bg-blue-800 transition-all duration-300'
              href='/'
            >
              Wybierz pakiet
            </Link>
          </div>
          <hr className='border-t border-t-gray-200 mb-2' />
          <div className='p-5'>
            <p className='text-base font-medium mb-4'>SZCZEGÓŁY</p>
            <ul className='space-y-3'>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Dostęp do podstawowych funkcji
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Podstawowa analityka i raporty
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                20GB dla każdego pracownika
              </li>
              <li className='text-base text-gray-700 flex items-center gap-2'>
                <svg
                  className='size-5 stroke-green-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Podstawowa opiekta techniczna
              </li>
            </ul>
          </div>
        </Plan>
      </div>
    </section>
  );
}

function Plan({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 shadow-md shadow-gray-200/50 min-w-96 translate-y-4 opacity-0 transition-all duration-1000',
        isInView && 'translate-y-0 opacity-100'
      )}
      ref={ref}
    >
      {children}
    </div>
  );
}

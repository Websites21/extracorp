'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import CTAButton from './cta-button';

export default function FAQ() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourthOpen, setIsFourthOpen] = useState(false);

  return (
    <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 text-center mb-16 lg:mb-24'>
      <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 mb-4'>
        Masz jakieś <span className='text-blue-700'>pytania?</span>
      </h2>
      <p className='text-lg text-gray-700 mb-12'>
        W tej sekcji postaramy się na nie odpowiedzieć.
      </p>
      <div className='space-y-4 max-w-4xl mx-auto mb-12'>
        <button
          className='border border-gray-200 p-4 rounded-lg text-left hover:bg-gray-50 transition-all duration-300'
          onClick={() => setIsFirstOpen((prev) => !prev)}
        >
          <span className='text-gray-900 text-lg font-medium flex justify-between items-center'>
            Jakie wsparcie techniczne i szkolenia są dostępne po zakupie?
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500 hidden',
                isFirstOpen && 'block'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500',
                isFirstOpen && 'hidden'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
          <span
            className={cn(
              'grid grid-rows-[0fr] transition-all duration-300',
              isFirstOpen && 'grid-rows-[1fr] mt-1'
            )}
          >
            <span className='text-gray-700 text-base overflow-hidden max-w-3xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam veritatis non voluptatem facere nesciunt fugit impedit fuga
              nobis et. Cupiditate, asperiores delectus facere est voluptas
              suscipit blanditiis quo quae.
            </span>
          </span>
        </button>
        <button
          className='border border-gray-200 p-4 rounded-lg text-left hover:bg-gray-50 transition-all duration-300'
          onClick={() => setIsSecondOpen((prev) => !prev)}
        >
          <span className='text-gray-900 text-lg font-medium flex justify-between items-center'>
            Czy panel jest łatwy w obsłudze i intuicyjny?
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500 hidden',
                isSecondOpen && 'block'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500',
                isSecondOpen && 'hidden'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
          <span
            className={cn(
              'grid grid-rows-[0fr] transition-all duration-300',
              isSecondOpen && 'grid-rows-[1fr] mt-1'
            )}
          >
            <span className='text-gray-700 text-base overflow-hidden max-w-3xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam veritatis non voluptatem facere nesciunt fugit impedit fuga
              nobis et. Cupiditate, asperiores delectus facere est voluptas
              suscipit blanditiis quo quae.
            </span>
          </span>
        </button>
        <button
          className='border border-gray-200 p-4 rounded-lg text-left hover:bg-gray-50 transition-all duration-300'
          onClick={() => setIsThirdOpen((prev) => !prev)}
        >
          <span className='text-gray-900 text-lg font-medium flex justify-between items-center'>
            Jakie funkcje oferuje panel do zarządzania firmą?
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500 hidden',
                isThirdOpen && 'block'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500',
                isThirdOpen && 'hidden'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
          <span
            className={cn(
              'grid grid-rows-[0fr] transition-all duration-300',
              isThirdOpen && 'grid-rows-[1fr] mt-1'
            )}
          >
            <span className='text-gray-700 text-base overflow-hidden max-w-3xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam veritatis non voluptatem facere nesciunt fugit impedit fuga
              nobis et. Cupiditate, asperiores delectus facere est voluptas
              suscipit blanditiis quo quae.
            </span>
          </span>
        </button>
        <button
          className='border border-gray-200 p-4 rounded-lg text-left hover:bg-gray-50 transition-all duration-300'
          onClick={() => setIsFourthOpen((prev) => !prev)}
        >
          <span className='text-gray-900 text-lg font-medium flex justify-between items-center'>
            Czy panel można dostosować do potrzeb mojej firmy?
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500 hidden',
                isFourthOpen && 'block'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              className={cn(
                'size-6 shrink-0 stroke-gray-500',
                isFourthOpen && 'hidden'
              )}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
          <span
            className={cn(
              'grid grid-rows-[0fr] transition-all duration-300',
              isFourthOpen && 'grid-rows-[1fr] mt-1'
            )}
          >
            <span className='text-gray-700 text-base overflow-hidden max-w-3xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam veritatis non voluptatem facere nesciunt fugit impedit fuga
              nobis et. Cupiditate, asperiores delectus facere est voluptas
              suscipit blanditiis quo quae.
            </span>
          </span>
        </button>
      </div>
      <CTAButton />
    </section>
  );
}

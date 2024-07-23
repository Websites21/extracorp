import Link from 'next/link';
import React from 'react';
import CTAButton from './cta-button';

export default function Hero() {
  return (
    <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 text-center mb-16 lg:mb-24'>
      <Link
        className='text-sm group flex gap-1 w-max mx-auto mb-8 text-blue-700 bg-blue-50 border border-blue-500 rounded-full px-3 py-0.5 hover:bg-blue-100 transition-all duration-300'
        href='/'
      >
        Dołącz do nas na konferencji 24.08.2024
        <svg
          className='size-5 stroke-blue-700 group-hover:translate-x-1 transition-all duration-300'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 12H20M20 12L14 6M20 12L14 18'
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
      <h1 className='text-5xl lg:text-7xl text-gray-900 tracking-tighter font-semibold mb-8 max-w-6xl mx-auto'>
        Zarządzaj Twoją firmą <span className='text-blue-700'>z łatwością</span>{' '}
        i <span className='text-blue-700'>zwiększaj</span> swoje zyski
      </h1>
      <p className='text-lg text-gray-700 mb-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, repellat
        quibusdam incidunt delectus dolore veniam hic numquam dolor ut quos
      </p>
      <CTAButton />
      <img
        className='rounded-lg w-full max-w-6xl mx-auto mb-12'
        src='/hero-1.png'
        alt='Zdjęcie panelu'
      />
      <div className='flex items-center gap-6 relative overflow-x-hidden h-12 [mask-image:linear-gradient(to_right,transparent,#000,transparent)] bg-gray-50 py-12'>
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-0s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-1.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-2s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-2.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-4s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-3.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-6s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-4.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-8s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-5.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-10s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-6.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-12s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-7.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-14s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-8.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-16s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-9.svg'
          alt='Logo firmy'
        />
        <img
          className='absolute h-12 w-44 left-[max(176px*10,100%)] animate-[slider_20s_linear_infinite_-18s] grayscale hover:grayscale-0 transition-all duration-300'
          src='/featured/featured-10.svg'
          alt='Logo firmy'
        />
      </div>
    </section>
  );
}

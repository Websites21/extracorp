'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Steps() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className='mb-16 lg:mb-24 py-16 lg:py-24 bg-gray-50'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-8'>
        <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 mb-4'>
          Tylko <span className='text-blue-700'>3 kroki</span> do sukcesu
        </h2>
        <p className='text-lg text-gray-700 mb-12'>
          Zobacz, jak niewiele potrzeba, abyś zaczął zarabiać więcej.
        </p>
        <div className='grid lg:grid-cols-[1fr_2fr] gap-8'>
          <div className='space-y-4'>
            <button
              className={cn(
                'grid grid-cols-[40px_1fr] place-items-baseline border-l-4 border-l-gray-200 pl-4 py-6 text-left',
                activeStep === 1 && 'border-l-blue-600'
              )}
              onClick={() => setActiveStep(1)}
            >
              <span
                className={cn(
                  'text-lg text-gray-900 font-medium',
                  activeStep === 1 && 'text-blue-700'
                )}
              >
                01
              </span>
              <div>
                <span className='text-2xl text-gray-900 font-medium'>
                  Załóż konto w serwisie
                </span>
                <div
                  className={cn(
                    'grid grid-rows-[0fr] transition-all duration-300',
                    activeStep === 1 && 'grid-rows-[1fr]'
                  )}
                >
                  <span className='text-base text-gray-700 mt-1 overflow-hidden'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius voluptatem quasi earum. Dolorum quas non vero, debitis
                    sed perspiciatis laudantium repudiandae minus a officia!
                    Perferendis exercitationem
                  </span>
                </div>
              </div>
            </button>
            <button
              className={cn(
                'grid grid-cols-[40px_1fr] place-items-baseline border-l-4 border-l-gray-200 pl-4 py-6 text-left',
                activeStep === 2 && 'border-l-blue-600'
              )}
              onClick={() => setActiveStep(2)}
            >
              <span
                className={cn(
                  'text-lg text-gray-900 font-medium',
                  activeStep === 2 && 'text-blue-700'
                )}
              >
                02
              </span>
              <div>
                <span className='text-2xl text-gray-900 font-medium'>
                  Utwórz swój zespół
                </span>
                <div
                  className={cn(
                    'grid grid-rows-[0fr] transition-all duration-300',
                    activeStep === 2 && 'grid-rows-[1fr]'
                  )}
                >
                  <span className='text-base text-gray-700 mt-1 overflow-hidden'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius voluptatem quasi earum. Dolorum quas non vero, debitis
                    sed perspiciatis laudantium repudiandae minus a officia!
                    Perferendis exercitationem
                  </span>
                </div>
              </div>
            </button>
            <button
              className={cn(
                'grid grid-cols-[40px_1fr] place-items-baseline border-l-4 border-l-gray-200 pl-4 py-6 text-left',
                activeStep === 3 && 'border-l-blue-600'
              )}
              onClick={() => setActiveStep(3)}
            >
              <span
                className={cn(
                  'text-lg text-gray-900 font-medium',
                  activeStep === 3 && 'text-blue-700'
                )}
              >
                03
              </span>
              <div>
                <span className='text-2xl text-gray-900 font-medium'>
                  Zacznij zarządzać firmą
                </span>
                <div
                  className={cn(
                    'grid grid-rows-[0fr] transition-all duration-300',
                    activeStep === 3 && 'grid-rows-[1fr]'
                  )}
                >
                  <span className='text-base text-gray-700 mt-1 overflow-hidden'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius voluptatem quasi earum. Dolorum quas non vero, debitis
                    sed perspiciatis laudantium repudiandae minus a officia!
                    Perferendis exercitationem
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div>
            <img
              className={cn(
                'rounded-lg w-full translate-y-12 opacity-0 hidden',
                activeStep === 1 && 'animate-show block'
              )}
              src='/steps/step-1.png'
              alt='Zdjęcie panelu'
            />
            <img
              className={cn(
                'rounded-lg w-full translate-y-12 opacity-0 hidden',
                activeStep === 2 && 'animate-show block'
              )}
              src='/steps/step-2.png'
              alt='Zdjęcie panelu'
            />
            <img
              className={cn(
                'rounded-lg w-full translate-y-12 opacity-0 hidden',
                activeStep === 3 && 'animate-show block'
              )}
              src='/steps/step-3.png'
              alt='Zdjęcie panelu'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

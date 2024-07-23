import Link from 'next/link';

export default function CTAButton() {
  return (
    <Link
      className='text-lg font-medium text-white bg-blue-700 shadow-md shadow-blue-700/50 w-max mx-auto mb-12 group flex items-center gap-1 rounded-lg px-6 py-3 hover:bg-blue-800 transition-all duration-300'
      href='/'
    >
      Wypróbuj 14 dni za darmo
      <svg
        className='stroke-white size-6 group-hover:translate-x-1 transition-all duration-300'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9 18L15 12L9 6'
          strokeWidth='2.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Link>
  );
}

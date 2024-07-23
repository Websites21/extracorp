import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-t-gray-200 py-4'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-8'>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4'>
          <Link href='/'>
            <img className='w-36' src='/logo.svg' alt='Logo ExtraCorp' />
          </Link>
          <p className='text-base text-gray-700'>
            © 2024 ExtraCorp. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 mb-16 lg:mb-24'>
      <div className='px-4 sm:px-8 py-10 bg-blue-900 rounded-lg'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-4 text-center xl:text-left'>
          <div>
            <h2 className='text-3xl font-semibold tracking-tight text-white mb-2'>
              Wypróbuj 14 dni za darmo
            </h2>
            <p className='text-lg text-blue-200'>
              Dołącz do ponad 4000 przedsiębiorców, którzy przyspieszyli rozwój
              swojej firmy.
            </p>
          </div>
          <Link
            className='text-lg inline-block font-medium text-white bg-blue-700 shadow-md shadow-blue-700/50 rounded-lg px-6 py-3 hover:bg-blue-800 transition-all duration-300'
            href='/'
          >
            Zacznij już teraz
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FAQ() {
  return (
    <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 text-center mb-16 lg:mb-24'>
      <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter text-gray-900 mb-4'>
        Masz jakieś <span className='text-blue-700'>pytania?</span>
      </h2>
      <p className='text-lg text-gray-700 mb-12'>
        W tej sekcji postaramy się na nie odpowiedzieć.
      </p>
      <div className='space-y-4 max-w-4xl mx-auto mb-12'>
        <button className='border border-gray-200 p-4 rounded-lg text-left hover:bg-gray-50 transition-all duration-300'>
          <span className='text-gray-900 text-lg font-medium flex justify-between items-center'>
            Jakie wsparcie techniczne i szkolenia są dostępne po zakupie?
          </span>
        </button>
      </div>
    </section>
  );
}

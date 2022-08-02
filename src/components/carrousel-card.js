function CarrouselCard({ cardImage, link, description, openLink }) {
  return (
    <div className='bg-white rounded-md flex flex-col justify-between mx-4'>
      <img className='rounded-t-xl' alt='project' src={cardImage} />
      <h3 className='text-2xl text-gray-600 text-center pb-4 m-2 font-semibold'>
        {description}
      </h3>
      <div className='text-center'>
        <button
          onClick={() => openLink(link)}
          className='p-4 m-auto bg-gray-700 text-yellow-400 rounded-b-md w-full'
        >
          <p className='font-semibold text-4xl mb-4'>Live demo</p>
        </button>
      </div>
    </div>
  );
}

export { CarrouselCard };

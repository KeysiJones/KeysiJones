function RegularCard({ image, openLink, link, description }) {
  return (
    <div className='mb-8 mx-8 my-8 bg-white rounded-b-xl rounded-t-xl project-item'>
      <img className='rounded-t-xl' alt='project' src={image} />
      <h3 className='text-2xl text-gray-600 text-center pb-4 m-2 font-semibold'>
        {description}
      </h3>
      <div className='text-center'>
        <button
          onClick={() => openLink(link)}
          className='p-4 bg-gray-800 hover:bg-yellow-400 text-yellow-400 hover:text-gray-800 rounded-b-md w-full'
        >
          <p className='font-bold text-3xl'>Live demo</p>
        </button>
      </div>
    </div>
  );
}

export { RegularCard };

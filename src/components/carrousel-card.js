import { useSelector } from 'react-redux';

function CarrouselCard({ cardImage, link, description, openLink }) {
  const theme = useSelector((state) => state.portfolio.theme);
  const darkMode = theme === 'dark';
  return (
    <div className='flex flex-col justify-between mx-4 bg-white rounded-md'>
      <img className='rounded-t-xl' alt='project' src={cardImage} />
      <h3
        className={`text-2xl ${
          darkMode ? 'text-gray-600' : 'text-gray-700'
        } text-center pb-4 m-2 font-semibold`}
      >
        {description}
      </h3>
      <div className='text-center'>
        <button
          onClick={() => openLink(link)}
          className='w-full p-4 m-auto text-yellow-500 bg-gray-700 rounded-b-md'
        >
          <p className='mb-4 text-4xl font-bold'>Live demo</p>
        </button>
      </div>
    </div>
  );
}

export { CarrouselCard };

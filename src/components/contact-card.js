import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaNodeJs } from 'react-icons/fa';

function ContactCard({ footer, icons, socialMediaIconsSize = 'sm' }) {
  const openLink = (url) => window.open(url, '_blank');

  return (
    <div
      id='main-buttons'
      className={`${
        footer ? '' : 'mx-8'
      } flex mt-8 mb-4 flex-col text-center justify-center`}
    >
      <div
        className={`p-2 text-yellow-400 ${
          footer ? '' : 'rounded-xl'
        } font-bold text-5xl lg:text-6xl flex justify-center`}
      >
        {icons ? (
          <div>
            <button
              onClick={() =>
                openLink('https://www.linkedin.com/in/keysijones/')
              }
              className='mx-8 text-blue-400'
            >
              <FontAwesomeIcon
                icon={icons.linkedin}
                size={socialMediaIconsSize}
              />
            </button>
            <button
              onClick={() => openLink('https://github.com/KeysiJones')}
              className='mx-8 text-white'
            >
              <FontAwesomeIcon
                icon={icons.github}
                size={socialMediaIconsSize}
              />
            </button>
            <button
              onClick={() => openLink('https://t.me/keysijones')}
              className='mx-8 text-blue-400'
            >
              <FontAwesomeIcon
                icon={icons.telegram}
                size={socialMediaIconsSize}
              />
            </button>
          </div>
        ) : (
          <div className='flex self-center w-full p-2 justify-evenly'>
            <FaReact size={65} color='#61DBFB' id='react-logo' />
            <FaNodeJs size={65} color='#50b148' />
          </div>
        )}
      </div>
    </div>
  );
}

export { ContactCard };

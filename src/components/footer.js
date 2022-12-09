import { ContactCard } from './contact-card';
import {
  faLinkedin,
  faTelegramPlane,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();
  const icons = {
    linkedin: faLinkedin,
    github: faGithub,
    telegram: faTelegramPlane,
  };

  return (
    <div>
      <footer className='text-xl text-center text-white'>
        <ContactCard icons={icons} footer={true} socialMediaIconsSize='md' />
      </footer>
      <p className='py-8 text-2xl text-center text-white'>
        &copy; {currentYear} - Keysi Jones
      </p>
    </div>
  );
}

export { Footer };

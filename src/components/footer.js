import { ContactCard } from './contact-card';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const icons = [faLinkedin, faGithub, faTwitter];
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col'>
      <p className='mt-4 text-center text-white text-3xl font-bold mb-2'>
        Social media
      </p>
      <footer className='text-white text-center text-xl'>
        <ContactCard icons={icons} footer={true} />
      </footer>
      <p className='text-white text-center text-xl'>
        &copy; {currentYear} - Keysi Jones. All rights reserved
      </p>
    </div>
  );
}

export { Footer };

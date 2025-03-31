import { useSections } from '@/hooks/use-sections';

const Footer = () => {
  const { scrollToSection } = useSections();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-16 bg-card">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <button
            onClick={() => scrollToSection('home')}
            className="inline-block"
          >
            <h2 className="text-2xl font-clash font-bold">
              Petr <span className="text-accent">Kaločay</span>
            </h2>
          </button>
          
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://instagram.com/p.kalocay" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition-colors duration-300">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="mailto:petrkalocay@gmail.com" className="text-xl hover:text-accent transition-colors duration-300">
              <i className="ri-mail-line"></i>
            </a>
          </div>
          
          <p className="text-gray-400 mt-8">
            &copy; {currentYear} Petr Kaločay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

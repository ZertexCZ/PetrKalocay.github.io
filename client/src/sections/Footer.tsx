import { useSections } from '@/hooks/use-sections';

const Footer = () => {
  const { scrollToSection } = useSections();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-16 px-6 md:px-12 lg:px-16 bg-background relative overflow-hidden border-t border-accent/10">
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0'
        }}></div>
      </div>

      
      {/* Horizontal glowing line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      {/* Main content centered and constrained width */}
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        {/* Logo and social links in a single centered row */}
        <div className="flex flex-col items-center mb-12">
          <button
            onClick={() => scrollToSection('home')}
            className="inline-block"
          >
            <h2 className="text-3xl font-clash font-bold">
              Petr <span className="text-accent">K<span className="text-accent/80">.</span></span>
            </h2>
          </button>
          
          <div className="flex space-x-6 mt-6">
            <a 
              href="https://instagram.com/p.kalocay" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-background border border-muted/30 hover:border-accent/50 hover:text-accent flex items-center justify-center transition-all duration-300 text-xl"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a 
              href="mailto:petrkalocay@gmail.com" 
              className="w-12 h-12 rounded-full bg-background border border-muted/30 hover:border-accent/50 hover:text-accent flex items-center justify-center transition-all duration-300 text-xl"
            >
              <i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
        
        {/* Two column layout for links */}
        <div className="grid grid-cols-2 gap-10 mb-12">
          {/* Left column for navigation */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm uppercase tracking-wider text-accent font-semibold mb-6">Navigation</h3>
            <div className="flex flex-col items-center space-y-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors px-4 py-1 hover:bg-accent/5 rounded-full">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors px-4 py-1 hover:bg-accent/5 rounded-full">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-accent transition-colors px-4 py-1 hover:bg-accent/5 rounded-full">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-accent transition-colors px-4 py-1 hover:bg-accent/5 rounded-full">Projects</button>
            </div>
          </div>
          
          {/* Right column for contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm uppercase tracking-wider text-accent font-semibold mb-6">Contact</h3>
            <div className="flex flex-col items-center space-y-4">
              <a href="mailto:petrkalocay@gmail.com" className="hover:text-accent transition-colors px-4 py-1 hover:bg-accent/5 rounded-full">petrkalocay@gmail.com</a>
              <a href="mailto:petrkalocay@outlook.cz" className="hover:text-accent transition-colors px-4 py-1 hover:bg-accent/5 rounded-full">petrkalocay@outlook.cz</a>
              <a href="https://instagram.com/p.kalocay" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors px-4 py-1 hover:bg-accent/5 rounded-full">@p.kalocay</a>
            </div>
          </div>
        </div>
        
        {/* Copyright at bottom, centered */}
        <div className="text-center border-t border-muted/20 pt-6">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Petr Kaločay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

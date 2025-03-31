import { useSections } from '@/hooks/use-sections';

const Footer = () => {
  const { scrollToSection } = useSections();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-16 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-radial from-accent/5 to-transparent"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-accent/10 filter blur-xl"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-primary/10 filter blur-xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <button
                onClick={() => scrollToSection('home')}
                className="inline-block"
              >
                <h2 className="text-2xl font-clash font-bold">
                  Petr <span className="text-accent">K<span className="text-accent/80">.</span></span>
                </h2>
              </button>
              <p className="text-gray-400 mt-2">IT Student & Developer</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm uppercase tracking-wider text-accent mb-4">Navigation</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block mx-auto md:mx-0 hover:text-accent transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block mx-auto md:mx-0 hover:text-accent transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="block mx-auto md:mx-0 hover:text-accent transition-colors">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="block mx-auto md:mx-0 hover:text-accent transition-colors">Projects</button>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-sm uppercase tracking-wider text-accent mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:petrkalocay@gmail.com" className="block hover:text-accent transition-colors">petrkalocay@gmail.com</a>
                <a href="mailto:petrkalocay@outlook.cz" className="block hover:text-accent transition-colors">petrkalocay@outlook.cz</a>
                <a href="https://instagram.com/p.kalocay" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">@p.kalocay</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Petr Kaločay. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://instagram.com/p.kalocay" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/50 hover:bg-accent/20 flex items-center justify-center transition-colors duration-300">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="mailto:petrkalocay@gmail.com" className="w-10 h-10 rounded-full bg-background/50 hover:bg-accent/20 flex items-center justify-center transition-colors duration-300">
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

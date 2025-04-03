import { useSections } from '@/hooks/use-sections';
import { translations } from '@/data/translations';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { scrollToSection } = useSections();
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="pb-8 pt-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-t border-accent/10"
      style={{
        background: "linear-gradient(125deg, #0c0c14 0%, #111120 50%, #0c0c14 100%)",
        backgroundSize: "200% 200%",
        animation: "bg-pulse 25s ease infinite"
      }}
    >
      {/* Animované hvězdné pozadí */}
      <div className="absolute inset-0 -z-10" style={{ overflow: 'hidden' }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 0 4px rgba(56, 189, 248, 0.8)',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 2}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Animované polární záře */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-40 opacity-20"
          style={{
            background: 'linear-gradient(to top, rgba(56, 189, 248, 0.25), transparent)',
            transform: 'translateY(50%)',
            filter: 'blur(30px)',
            animation: 'aurora-wave 8s ease-in-out infinite alternate'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-15"
          style={{
            background: 'linear-gradient(to top, rgba(120, 100, 255, 0.2), transparent)',
            transform: 'translateY(30%)',
            filter: 'blur(25px)',
            animation: 'aurora-wave 12s ease-in-out infinite alternate-reverse',
            animationDelay: '1s'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10"
          style={{
            background: 'linear-gradient(to top, rgba(30, 144, 255, 0.15), transparent)',
            transform: 'translateY(40%)',
            filter: 'blur(20px)',
            animation: 'aurora-wave 15s ease-in-out infinite alternate',
            animationDelay: '2s'
          }}
        />
      </div>
      
      {/* Plovoucí gradientní koule */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 70%)',
            filter: 'blur(15px)',
            animation: 'float-slow 10s ease-in-out infinite'
          }}
        />
        <div className="absolute top-10 left-20 w-32 h-32 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, rgba(120, 100, 255, 0.3) 0%, rgba(120, 100, 255, 0.1) 50%, transparent 70%)',
            filter: 'blur(15px)',
            animation: 'float-slow 13s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
      </div>
      
      {/* Animovaný gradientní vzor pozadí */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
          animation: 'dots-float 60s linear infinite'
        }}></div>
      </div>

      
      {/* Horizontální zářící linie */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      {/* Hlavní obsah vycentrovaný s omezenou šířkou */}
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        {/* Logo a odkazy na sociální sítě v jednom vycentrovaném řádku */}
        <div className="flex flex-col items-center mb-12">
          <button
            onClick={() => scrollToSection('home')}
            className="inline-block"
          >
            <h2 className="text-3xl font-clash font-bold">
              {(translations as any)[language].footerName.split(' ')[0]} <span className="text-accent">{(translations as any)[language].footerName.split(' ')[1]}<span className="text-accent/80">.</span></span>
            </h2>
          </button>
          
          <div className="flex space-x-6 mt-6">
            <a 
              href="https://instagram.com/p.kalocay" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-xl relative group"
              style={{
                background: "linear-gradient(145deg, rgba(18, 18, 30, 0.8), rgba(25, 25, 39, 0.9))",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(56, 189, 248, 0.15)"
              }}
            >
              <i className="ri-instagram-line relative z-10 group-hover:text-accent transition-colors"></i>
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(145deg, rgba(25, 25, 35, 0.6), rgba(15, 15, 25, 0.7))",
                  boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.4), 0 0 15px rgba(56, 189, 248, 0.15)",
                }}
              ></div>
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=petrkalocay@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-xl relative group cursor-pointer"
              style={{
                background: "linear-gradient(145deg, rgba(18, 18, 30, 0.8), rgba(25, 25, 39, 0.9))",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(56, 189, 248, 0.15)",
                zIndex: 10
              }}
            >
              <i className="ri-mail-line relative z-20 group-hover:text-accent transition-colors"></i>
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(145deg, rgba(25, 25, 35, 0.6), rgba(15, 15, 25, 0.7))",
                  boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.4), 0 0 15px rgba(56, 189, 248, 0.15)",
                }}
              ></div>
            </a>
          </div>
        </div>
        
        {/* Dvousloupcové rozložení pro odkazy */}
        <div className="grid grid-cols-2 gap-10 mb-12">
          {/* Levý sloupec pro navigaci */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm uppercase tracking-wider text-accent font-semibold mb-6">{(translations as any)[language].footerNavigation}</h3>
            <div className="flex flex-col items-center space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].home}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].about}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].skills}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].projects}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].services}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </button>
            </div>
          </div>
          
          {/* Pravý sloupec pro kontakt */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm uppercase tracking-wider text-accent font-semibold mb-6">{(translations as any)[language].contact}</h3>
            <div className="flex flex-col items-center space-y-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=petrkalocay@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].footerEmail}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </a>
              <a 
                href="https://outlook.live.com/mail/0/deeplink/compose?to=petrkalocay@outlook.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].footerEmail2}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </a>
              <a 
                href="https://instagram.com/p.kalocay" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-1.5 rounded-full transition-all duration-300 relative group"
                style={{
                  background: "linear-gradient(145deg, rgba(18, 18, 30, 0.4), rgba(25, 25, 39, 0.5))",
                  border: "1px solid rgba(56, 189, 248, 0.05)"
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors">{(translations as any)[language].footerInstagram}</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(25, 25, 35, 0.4), rgba(15, 15, 25, 0.5))",
                    boxShadow: "inset 0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)",
                  }}
                ></div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright dole, vycentrovaný */}
        <div className="text-center border-t border-muted/20 pt-6">
          <p className="text-gray-400 text-sm">
            {(translations as any)[language].footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

interface LanguageSelectorProps {
  onSelectLanguage?: (language: 'cz' | 'en') => void;
}

export function LanguageSelector({ onSelectLanguage }: LanguageSelectorProps) {
  const { setLanguage } = useLanguage();
  const [open, setOpen] = useState(true);
  const [borderPosition, setBorderPosition] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<'cz' | 'en' | null>(null);

  useEffect(() => {
    const animation = setInterval(() => {
      setBorderPosition(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(animation);
  }, []);

  const handleSelectLanguage = (language: 'cz' | 'en') => {
    setSelectedLanguage(language);
    setLanguage(language);
    if (onSelectLanguage) {
      onSelectLanguage(language);
    }
    // Close dialog after a short delay
    setTimeout(() => setOpen(false), 500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] max-w-[800px] h-[80vh] max-h-[600px] flex flex-col items-center justify-center p-0 overflow-hidden border-none bg-background/95 backdrop-blur-sm">
        <div className="relative w-full h-full">
          {/* Animated border */}
          <motion.div 
            className="absolute inset-0 rounded-lg overflow-hidden z-0"
            style={{
              background: `linear-gradient(${borderPosition * 3.6}deg, rgba(56, 189, 248, 0.8), rgba(99, 102, 241, 0.8), rgba(236, 72, 153, 0.8), rgba(56, 189, 248, 0.8))`,
              padding: '2px',
              maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
              maskSize: 'calc(100% - 4px) calc(100% - 4px), 100% 100%',
              maskPosition: '2px 2px, 0 0',
              maskRepeat: 'no-repeat',
              maskComposite: 'exclude',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-background rounded-lg p-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center font-clash"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Vyberte jazyk / Select language
            </motion.h2>
            
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-[500px]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  onClick={() => handleSelectLanguage('cz')} 
                  className={cn(
                    "flex-1 h-24 text-2xl font-bold transition-all duration-300",
                    selectedLanguage === 'cz' 
                      ? "bg-accent text-white hover:bg-accent/90 scale-105" 
                      : "hover:scale-105"
                  )}
                  variant={selectedLanguage === 'cz' ? "default" : "outline"}
                >
                  Čeština (CZ)
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  onClick={() => handleSelectLanguage('en')} 
                  className={cn(
                    "flex-1 h-24 text-2xl font-bold transition-all duration-300",
                    selectedLanguage === 'en' 
                      ? "bg-accent text-white hover:bg-accent/90 scale-105" 
                      : "hover:scale-105"
                  )}
                  variant={selectedLanguage === 'en' ? "default" : "outline"}
                >
                  English (EN)
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
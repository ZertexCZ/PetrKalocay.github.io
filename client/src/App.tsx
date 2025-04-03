import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Cursor from "@/components/Cursor";
import NotFound from "@/pages/not-found";
import useIsMobile from "@/hooks/use-mobile";
import { LanguageSelector } from "@/components/LanguageSelector";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

function AppContent() {
  const isMobile = useIsMobile();
  const { language, setLanguage } = useLanguage();
  const [showLanguageSelector, setShowLanguageSelector] = useState(() => {
    // Pokud není v localStorage uložen jazyk, zobrazíme selektor
    return !localStorage.getItem('language');
  });
  
  useEffect(() => {
    // Prevent scroll-chaining on iOS
    document.body.style.overflow = "auto";
    document.body.style.overscrollBehavior = "none";
    
    // Remove default outline for mouse users, keep for keyboard
    window.addEventListener("mousedown", () => {
      document.body.classList.add("using-mouse");
    });
    
    window.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        document.body.classList.remove("using-mouse");
      }
    });
    
    return () => {
      window.removeEventListener("mousedown", () => {});
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <>
      {!isMobile && <Cursor />}
      {showLanguageSelector && (
        <LanguageSelector 
          onSelectLanguage={(selectedLanguage) => {
            setLanguage(selectedLanguage);
            setShowLanguageSelector(false);
          }} 
        />
      )}
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

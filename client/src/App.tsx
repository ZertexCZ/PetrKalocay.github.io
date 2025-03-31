import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Cursor from "@/components/Cursor";
import NotFound from "@/pages/not-found";
import useIsMobile from "@/hooks/use-mobile";

function App() {
  const isMobile = useIsMobile();
  
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
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;

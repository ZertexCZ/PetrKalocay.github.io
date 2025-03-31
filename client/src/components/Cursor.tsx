import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Move custom cursor with a slight delay for smoothness
      requestAnimationFrame(() => {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
        
        // Move dot without delay for precision
        cursorDot.style.left = `${clientX}px`;
        cursorDot.style.top = `${clientY}px`;
      });
    };
    
    // Add cursor effects for interactive elements
    const addCursorEffects = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('scale-150');
          cursor.classList.add('bg-accent/20');
          cursor.classList.add('border-transparent');
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('scale-150');
          cursor.classList.remove('bg-accent/20');
          cursor.classList.remove('border-transparent');
        });
      });
    };
    
    document.addEventListener('mousemove', onMouseMove);
    
    // Initial setup and periodic refresh of cursor effects 
    // (to catch dynamically added elements)
    addCursorEffects();
    const effectsInterval = setInterval(addCursorEffects, 2000);
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      clearInterval(effectsInterval);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed w-6 h-6 rounded-full border-2 border-accent pointer-events-none mix-blend-difference z-50 transition-transform duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={cursorDotRef} 
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
};

export default Cursor;

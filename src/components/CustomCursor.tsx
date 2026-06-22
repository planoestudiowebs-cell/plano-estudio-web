import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only show custom cursor on devices that support hover (desktop)
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isDesktop) {
      window.addEventListener('mousemove', updateMousePosition);
      // Hide default cursor globally when this component is active and supported
      document.body.style.cursor = 'none';
      
      // Ensure interactive elements also hide cursor, we handle this with global CSS
      document.documentElement.classList.add('custom-cursor-active');
    } else {
      document.body.style.cursor = 'auto';
      document.documentElement.classList.remove('custom-cursor-active');
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', checkIsDesktop);
      document.body.style.cursor = 'auto';
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-bronce rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 20,
        mass: 0.5,
      }}
    />
  );
}

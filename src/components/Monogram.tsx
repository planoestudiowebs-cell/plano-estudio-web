import { motion, Variants } from 'framer-motion';

export default function Monogram({ 
  size = 48, 
  animated = false, 
  className = '' 
}: { 
  size?: number; 
  animated?: boolean; 
  className?: string; 
}) {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 4, ease: "easeInOut" } 
    }
  };

  const PathComponent = animated ? motion.path : 'path';

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <PathComponent
        d="M50 5 a45 45 0 1 0 0 90 a45 45 0 1 0 0 -90"
        stroke="currentColor"
        strokeWidth="2"
        variants={animated ? pathVariants : undefined}
        initial={animated ? "hidden" : undefined}
        animate={animated ? "visible" : undefined}
      />
      {/* P */}
      <PathComponent
        d="M38 32 V68 M38 32 H48 C54 32 54 48 48 48 H38"
        stroke="currentColor"
        strokeWidth="2"
        variants={animated ? pathVariants : undefined}
        initial={animated ? "hidden" : undefined}
        animate={animated ? "visible" : undefined}
      />
      {/* E */}
      <PathComponent
        d="M62 32 H52 V68 H62 M52 50 H60"
        stroke="currentColor"
        strokeWidth="2"
        variants={animated ? pathVariants : undefined}
        initial={animated ? "hidden" : undefined}
        animate={animated ? "visible" : undefined}
      />
    </svg>
  );
}

import { motion } from "framer-motion";

interface BlurInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

function BlurIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default BlurIn;

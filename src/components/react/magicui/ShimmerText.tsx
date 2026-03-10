import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

function ShimmerText({
  children,
  className,
  shimmerWidth = 100,
}: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "bg-[length:250%_100%] animate-shimmer",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, #E8A020 0%, #F5B942 ${shimmerWidth / 2}%, #E8A020 ${shimmerWidth}%)`,
        animationDuration: "3s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      {children}
    </span>
  );
}

export default ShimmerText;

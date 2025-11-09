// src/components/shared/loading-spinner.tsx
"use client";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  text?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text,
  className,
}) => {
  return (
    <div
      className={cn(
        // وسطِ بخش محتوا (کنار سایدبار)
        "flex h-screen w-full items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3">
        {/* خود اسپینر – بزرگ */}
        <div
          className={cn(
            "h-14 w-14 animate-spin rounded-full border-4 border-primary border-t-transparent"
          )}
        />
        {text && (
          <p className="text-sm text-muted-foreground">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;

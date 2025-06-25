"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useMemo } from "react";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Revenue Goal Achieved",
    description: "$5,000 MRR milestone unlocked",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "App Store Approved! 🎉",
    description: "Your app accepted on first submission",
    time: "10m ago",
    icon: "🍎",
    color: "#FFB800",
  },
  {
    name: "Annual Subscription Purchased",
    description: "$99.99 via RevenueCat",
    time: "5m ago",
    icon: "💳",
    color: "#FF3D71",
  },
];

// Keep only the original 3 notifications, no repetition
const originalNotifications = [...notifications];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

// Custom non-looping animated list
function NonLoopingAnimatedList({ children, delay = 2000 }: { children: React.ReactNode; delay?: number }) {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    if (index < childrenArray.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1); // No modulo - just increment
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, delay, childrenArray.length]);

  const itemsToShow = useMemo(() => {
    return childrenArray.slice(0, index + 1).reverse();
  }, [index, childrenArray]);

  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatePresence>
        {itemsToShow.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, originY: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 40 }}
            layout
            className="mx-auto w-full"
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function VibeFastSuccessNotifications({
  className,
}: {
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    // Show notifications after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    // Hide notifications after all have been shown (3 notifications × 2 seconds each + 4 seconds buffer)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setHasFinished(true);
    }, 2000 + (3 * 2000) + 4000); // Start delay + (notifications × display time) + buffer

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Don't render anything if finished
  if (hasFinished) return null;

  return (
    <div
      className={cn(
        // Positioning: fixed to right edge with maximum z-index
        "fixed right-4 top-1/2 -translate-y-1/2 z-[9999]",
        // Size and overflow
        "h-[500px] w-[400px] flex flex-col overflow-hidden p-4",
        // Hide on smaller screens to avoid clutter
        "hidden lg:flex",
        // Smooth animations
        "transition-all duration-700 ease-in-out",
        // Conditional visibility and animation
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full pointer-events-none",
        className,
      )}
    >
      <NonLoopingAnimatedList delay={2000}>
        {originalNotifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </NonLoopingAnimatedList>

      {/* Gradient fade effect at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

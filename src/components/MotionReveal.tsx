'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MotionRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-right' | 'slide-left';
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  className?: string;
}

export default function MotionReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 750,
  threshold = 0.1,
  className = '',
}: MotionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Initial hidden transform styles
  const getInitialStyle = (): React.CSSProperties => {
    switch (animation) {
      case 'fade-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 32px, 0)',
        };
      case 'fade-in':
        return {
          opacity: 0,
        };
      case 'scale-up':
        return {
          opacity: 0,
          transform: 'scale3d(0.96, 0.96, 1)',
        };
      case 'slide-right':
        return {
          opacity: 0,
          transform: 'translate3d(-32px, 0, 0)',
        };
      case 'slide-left':
        return {
          opacity: 0,
          transform: 'translate3d(32px, 0, 0)',
        };
      default:
        return {
          opacity: 0,
          transform: 'translate3d(0, 32px, 0)',
        };
    }
  };

  const getVisibleStyle = (): React.CSSProperties => {
    switch (animation) {
      case 'fade-up':
      case 'slide-right':
      case 'slide-left':
        return {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        };
      case 'fade-in':
        return {
          opacity: 1,
        };
      case 'scale-up':
        return {
          opacity: 1,
          transform: 'scale3d(1, 1, 1)',
        };
      default:
        return {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        };
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
        ...(isVisible ? getVisibleStyle() : getInitialStyle()),
      }}
      className={className}
    >
      {children}
    </div>
  );
}

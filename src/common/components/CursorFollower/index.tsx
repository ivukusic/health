'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

export const CursorFollower = () => {
  const isTouchDevice = typeof window !== 'undefined' ? 'ontouchstart' in window : false;

  useEffect(() => {
    const cursor = document.getElementById('cursor');

    const cursorDot = document.getElementById('cursor-dot');
    if (isTouchDevice || !cursor) {
      return;
    }

    let time: any;
    window.addEventListener('mousemove', (e: any) => {
      const { target, x, y } = e;

      const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
      if (!time) {
        setTimeout(() => {
          time = new Date();
        }, 1000);
      }
      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0,
        ease: 'power4',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        backgroundColor: isTargetLinkOrBtn ? 'rgba(242, 195, 1, 0.6)' : 'transparent',
        transform: `scale(${isTargetLinkOrBtn ? 1.2 : 1})`,
      });
      gsap.to(cursorDot, {
        x: x + 3,
        y: y + 3,
        duration: time ? 0 : 0,
        ease: 'power4',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        backgroundColor: isTargetLinkOrBtn ? 'rgba(242, 195, 1, 0.4)' : 'rgba(242, 195, 1, 1)',
        transform: `scale(${isTargetLinkOrBtn ? 12 : 1})`,
      });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, [isTouchDevice]);

  return (
    <>
      <div
        id="cursor"
        className="bg-[rgba(242,195, 1, 0.3)] opacity-1 pointer-events-none fixed left-[-23px] top-[-24px] z-[99999] h-[40px] w-[40px] select-none rounded-full border-[2px] border-[rgba(242,195,1,1)]"
      />
      <div
        id="cursor-dot"
        className="bg-[rgba(242,195, 1, 0.3)] opacity-1 pointer-events-none fixed left-[-5px] top-[-6px] z-[99999] h-[4px] w-[4px] select-none rounded-full border-[2px] border-[rgba(242,195,1,1)]"
      />
    </>
  );
};

'use client';

import React, { MouseEvent, useEffect, useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { useHook } from './hook';
import { Menu } from '../Menu';

export const Header: React.FC = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const { isMenuVisible, triggerHandle } = useHook();

  useEffect(() => {
    if (document.location.hash) {
      setIsOnTop(!window.scrollY);
    }
    window.addEventListener('scroll', () => {
      setIsOnTop(!window.scrollY);
    });
  }, []);

  const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.pathname === '/'
      ? window.scroll({ top: 0, behavior: 'smooth' })
      : window.open('/', '_self');
  };

  return (
    <header
      className={clsx('fixed left-0 top-0 z-[9999] min-h-10 w-full p-4 px-10 transition-all', {
        'bg-secondary': !isOnTop,
        'bg-transparent': isOnTop,
      })}
    >
      <div className="flex flex-row items-center justify-between py-4">
        <Link className="z-[99999]" href="/" onClick={onLogoClick}>
          <Image
            className={clsx('transition-all duration-500 ease-in-out', {
              'h-[33px] w-[147px] lg:h-[44.9px] lg:w-[200px]': isOnTop,
              'h-[33px] w-[147px] lg:h-[33px] lg:w-[147px]': !isOnTop,
            })}
            src="https://global-uploads.webflow.com/5fb25baf136b324f8da5b1a4/5fb7cc1d53b786a6851a3627_Humanity%20logo.svg"
            height={33}
            width={147}
            alt="Humanity"
          />
        </Link>
        <Menu toggleMenu={triggerHandle} isMenuVisible={isMenuVisible} />
      </div>
    </header>
  );
};

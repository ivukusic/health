'use client';

import React, { MouseEvent } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useHook } from './hook';
import { IoIosArrowRoundBack } from 'react-icons/io';

interface Props {
  showBackButton: boolean;
}

export const Header: React.FC<Props> = ({ showBackButton }) => {
  const { handleBack } = useHook();

  const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.pathname === '/'
      ? window.scroll({ top: 0, behavior: 'smooth' })
      : window.open('/', '_self');
  };

  return (
    <header className="lef-0 fixed top-0 z-50 w-screen bg-background">
      <div className="container flex w-full flex-row items-center justify-between  py-4">
        {showBackButton ? (
          <button className="menu-button" onClick={handleBack}>
            <IoIosArrowRoundBack color="white" size={44} />
          </button>
        ) : (
          <div />
        )}
        <Link className="z-[99999]" href="/" onClick={onLogoClick}>
          <Image
            className="h-[33px] w-[147px] transition-all duration-500 ease-in-out lg:h-[44.9px] lg:w-[200px]"
            src="https://global-uploads.webflow.com/5fb25baf136b324f8da5b1a4/5fb7cc1d53b786a6851a3627_Humanity%20logo.svg"
            height={33}
            width={147}
            alt="Humanity"
          />
        </Link>
      </div>
    </header>
  );
};

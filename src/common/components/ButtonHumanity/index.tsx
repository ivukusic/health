import { MouseEvent } from 'react';

import clsx from 'clsx';

interface Props {
  children: string;
  disabled?: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  type?: 'button' | 'submit';
}

export const ButtonHumanity = ({ children, disabled, onClick, type = 'button' }: Props) => (
  <button
    className={clsx('min-h-14 w-full rounded-lg font-semibold text-black', {
      'bg-gray-400': disabled,
      'bg-gradient-to-r from-[#66DDCB] from-10% via-[#79BBDB] via-30% to-[#8D99EA] to-90% ':
        !disabled,
    })}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

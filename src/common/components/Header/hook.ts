import { useState } from 'react';

export const useHook = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const triggerHandle = () => {
    setMenuVisible(!isMenuVisible);
  };

  return { isMenuVisible, triggerHandle };
};

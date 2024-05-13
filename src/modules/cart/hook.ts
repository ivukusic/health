'use client';
import { useEffect, useMemo } from 'react';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/core/redux/store';

export const useHook = () => {
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const country = useSelector((state: RootState) => state.cart.country);

  useEffect(() => {
    if (!country) {
      router.push('/');
    }
  }, [country]);

  const handleContinue = async () => {
    router.push('/checkout');
  };

  const totalPrice = useMemo(() => {
    let price = 0;
    if (cartItems.length) {
      cartItems.forEach(item => {
        price += item.price;
      });
    }
    return price;
  }, [cartItems]);

  return { cartItems, country, handleContinue, totalPrice };
};

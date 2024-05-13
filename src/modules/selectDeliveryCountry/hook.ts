'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { SelectOption } from '@/common/components/Form/Select';
import { cartActions } from '@/core/redux/slices/cartSlice';

export const useHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [country, setCountry] = useState<SelectOption | null>(null);

  const handleContinue = () => {
    if (country) {
      dispatch(cartActions.selectCountry(country));
      router.push('/cart');
    }
  };

  const handleChange = (value: SelectOption) => {
    setCountry(value);
    if (value.value === 'other') {
      setErrorMessage('Service is not available in this country');
    }
  };

  return {
    country,
    errorMessage,
    handleChange,
    handleContinue,
  };
};

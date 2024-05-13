import { Currency } from '@/core/redux/slices/cartSlice';

export const getItemCurrencySymbol = (currency: Currency) => {
  if (currency === 'POUND') {
    return '£';
  }
  return '$';
};

export const getCurrencyFromCountry = (country?: string) => {
  if (country === 'UK') {
    return '£';
  }
  return 'USD$';
};

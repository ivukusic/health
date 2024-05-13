'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { ButtonHumanity } from '@/common/components/ButtonHumanity';
import { OrderDetails } from '@/common/components/OrderDetails';
import { getCurrencyFromCountry, getItemCurrencySymbol } from '@/common/utils/srting';
import { CartItem } from '@/core/redux/slices/cartSlice';

import { useHook } from './hook';

export const Cart = () => {
  const { cartItems, country, handleContinue, totalPrice } = useHook();

  const renderCarItem = (item: CartItem) => {
    return (
      <div key={item.name} className="flex items-center pb-5">
        <Image
          alt={item.name}
          className="h-[60px] w-[60px] rounded-lg object-cover"
          src={item.image.src}
          height={item.image.height}
          width={item.image.width}
        />
        <div className="ml-3 flex flex-1 flex-col">
          <div className="text-xl font-light">{item.name}</div>
          <div
            className={clsx({
              [item.quantityClassName || '']: item.quantityClassName,
              'font-light': !item.quantityClassName,
            })}
          >
            {item.quantity}
          </div>
        </div>
        <div className="text-lg font-light text-primary">
          {item.currency}
          {getItemCurrencySymbol(item.currency)}
          {item.price}
        </div>
      </div>
    );
  };

  const renderCartItems = () => {
    if (!cartItems.length) {
      return <div>No items in cart</div>;
    }
    return cartItems.map(renderCarItem);
  };

  return (
    <>
      <div className="container py-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>

      <div className="bg-[#373841]">
        <div className="container pb-1 pt-6">{renderCartItems()}</div>
      </div>

      <div className="container pb-8 pt-2">
        <div className="flex justify-between py-6">
          <div className="text-lg">Total</div>
          <div className="text-lg font-bold text-primary">
            {getCurrencyFromCountry(country?.value)}
            {totalPrice}
          </div>
        </div>
        <ButtonHumanity onClick={handleContinue}>Continue to checkout</ButtonHumanity>
      </div>

      <OrderDetails />
    </>
  );
};

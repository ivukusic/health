'use client';

import clsx from 'clsx';

import { ButtonHumanity } from '@/common/components/ButtonHumanity';
import { OrderDetails } from '@/common/components/OrderDetails';
import { CartItem } from '@/core/redux/slices/cartSlice';
import { getCurrencyFromCountry } from '@/common/utils/srting';
import { useHook } from './hook';
import { Input } from '@/common/components/Form/Input';
import Link from 'next/link';

export const Checkout = () => {
  const {
    cartItems,
    country,
    errorMessage,
    fieldProps,
    formik,
    handleContinue,
    isLoading,
    totalPrice,
  } = useHook();

  const renderCarItem = (item: CartItem) => {
    return (
      <div key={item.name} className="col-span-2 flex items-center pb-5">
        <div className="flex flex-1 flex-col">
          <div className="text-xl font-light">{item.name}</div>
          <div
            className={clsx({
              [item.quantityClassName || '']: item.quantityClassName,
              'font-light': !item.quantityClassName,
            })}
          >
            {item.description && (
              <span
                className={clsx({
                  [item.descriptionClassName || '']: item.descriptionClassName,
                  'font-light': !item.descriptionClassName,
                })}
              >
                {item.description}
              </span>
            )}
            {item.descriptionClassName ? ' / ' : ' - '}

            {item.quantity}
          </div>
        </div>
        <div className="col-span-1 text-lg font-light text-primary">
          {getCurrencyFromCountry(country?.value)}
          {item.price}
        </div>
      </div>
    );
  };

  const renderCartItems = () => {
    if (!cartItems.length) {
      return <div>No items in cart</div>;
    }
    return (
      <div className="bg-[#373841]">
        <div className="container pb-1 pt-6">
          <div className="flex flex-col">
            <div className="mb-2 grid grid-cols-3">
              <div className="col-span-2 text-lg font-bold">Service</div>
              <div className="col-span-1 text-right text-lg font-bold">Price</div>
            </div>
            {cartItems.map(renderCarItem)}
          </div>
        </div>
        <hr />
        <div className="container pb-6 pt-6">
          <div className="grid grid-cols-3">
            <div className="col-span-2 font-bold">Subtotal</div>
            <div className="col-span-1 text-right text-lg font-bold text-primary">
              {getCurrencyFromCountry(country?.value)}
              {totalPrice}
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 font-bold">Shipping</div>
            <div className="col-span-1 text-right text-lg font-bold text-primary">-</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 font-bold">Total</div>
            <div className="col-span-1 text-right text-lg font-bold text-primary">-</div>
          </div>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <>
        <h2 className="text-xl font-bold uppercase text-primary">Order email</h2>
        <Input
          className="mt-2"
          label="Email"
          required
          name="email"
          errorMessage={formik.errors.email}
          {...fieldProps('email')}
        />
        <h2 className="mt-8 text-xl font-bold uppercase text-primary">Shipping address</h2>
        <Input
          className="mt-2"
          label="First name"
          required
          name="firstName"
          errorMessage={formik.errors.firstName}
          {...fieldProps('firstName')}
        />
        <Input
          className="mt-2"
          label="Last name"
          required
          name="lastName"
          errorMessage={formik.errors.lastName}
          {...fieldProps('lastName')}
        />
        <Input
          className="mt-2"
          label="Address"
          required
          name="address"
          errorMessage={formik.errors.address}
          {...fieldProps('address')}
        />
        <Input
          className="mt-2"
          label="Apartment, suite, building (optional)"
          name="apartment"
          errorMessage={formik.errors.apartment}
          {...fieldProps('apartment')}
        />
        <Input
          className="mt-2"
          label="City"
          required
          name="city"
          errorMessage={formik.errors.city}
          {...fieldProps('city')}
        />
        <Input
          className="mt-2"
          label={country?.value === 'UK' ? 'Region (optional)' : 'State'}
          required={country?.value === 'USA'}
          name="state"
          errorMessage={formik.errors.state}
          {...fieldProps('state')}
        />
        <Input
          className="mt-2"
          label={country?.value === 'UK' ? 'Postal code' : 'ZIP code'}
          required
          name="postalCode"
          errorMessage={formik.errors.postalCode}
          {...fieldProps('postalCode')}
        />

        <h2 className="mt-8 text-xl font-bold uppercase text-primary">Your contact info</h2>
        <Input
          className="mt-2"
          label="Phone number"
          required
          name="phoneNumber"
          errorMessage={formik.errors.phoneNumber}
          {...fieldProps('phoneNumber')}
        />
        <div className="mb-3 text-[#B9BAC2]">
          Phone number in needed to reach you if an order processing or delivery issues occurs.
        </div>
        <div className="mb-6 text-[#B9BAC2]">
          This contact information will only be used as described in our{' '}
          <Link className="underline" href="#">
            Privacy Statement
          </Link>
          .
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container flex items-center justify-between py-6">
        <h1 className="text-2xl font-bold">1. Shipping</h1>
        <div className="font-light text-[#B9BAC2]">Step 1 of 2</div>
      </div>

      <div className="container pb-8 pt-2">
        {renderForm()}
        {!!errorMessage && (
          <div className="relative my-1 ml-1 flex items-center text-xs text-red-600">
            {errorMessage}
          </div>
        )}
        <ButtonHumanity onClick={handleContinue}>
          {isLoading ? '...' : 'Continue to payment'}
        </ButtonHumanity>
      </div>
      <div className="container">
        <hr className="opacity-70" />
      </div>
      <div className="container py-6">
        <h2 className="text-2xl font-bold">Order review</h2>
      </div>

      {renderCartItems()}

      <div className="my-4">
        <OrderDetails />
      </div>
    </>
  );
};

'use client';

import { Select } from '@/common/components/Form/Select';
import { ButtonHumanity } from '@/common/components/ButtonHumanity';
import { useHook } from './hook';

export const countryOptions = [
  { label: 'UK', value: 'UK' },
  { label: 'USA', value: 'USA' },
  { label: 'Other', value: 'other' },
];

export const SelectDeliveryCountry = () => {
  const { country, errorMessage, handleChange, handleContinue } = useHook();

  return (
    <>
      <div className="container py-6">
        <h1 className="text-2xl font-bold">Select Delivery Country</h1>
      </div>

      <div className="container">
        <Select
          options={countryOptions}
          required
          name="country"
          placeholder="Select country"
          errorMessage={errorMessage}
          onChange={handleChange}
          value={country}
        />
        <ButtonHumanity disabled={!!errorMessage || !country} onClick={handleContinue}>
          Continue
        </ButtonHumanity>
      </div>
    </>
  );
};

import { SelectOption } from '@/common/components/Form/Select';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Currency = 'POUND' | 'USD';

export interface CartItem {
  image: { src: string; height: number; width: number };
  name: string;
  quantity: string;
  description: string;
  quantityClassName?: string;
  descriptionClassName?: string;
  price: number;
  currency: Currency;
}

const items: CartItem[] = [
  {
    image: {
      src: 'https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8U29mdHdhcmUsMHx8fHx8fDE3MDQxOTA5NDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1300',
      height: 100,
      width: 100,
    },
    name: 'DNA Methylation text',
    quantity: '2 per year',
    description: 'test yearly subscription',
    price: 366.99,
    currency: 'USD',
  },
  {
    image: {
      src: 'https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8U29mdHdhcmUsMHx8fHx8fDE3MDQxOTA5NDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1300',
      height: 100,
      width: 100,
    },
    name: '45 days of FREE Pro',
    quantity: '100% OFF',
    quantityClassName: 'font-bold',
    description: 'USD$130.0',
    descriptionClassName: 'line-through',
    price: 0.0,
    currency: 'USD',
  },
];

interface CartState {
  country: SelectOption | null;
  items: CartItem[];
}

const INITIAL_STATE = {
  country: null,
  items,
} satisfies CartState as CartState;

export const { actions: cartActions, reducer: cartReducer } = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    selectCountry(state, action: PayloadAction<SelectOption>) {
      state.country = action.payload;
    },
    resetCountry(state) {
      state.country = null;
    },
  },
});

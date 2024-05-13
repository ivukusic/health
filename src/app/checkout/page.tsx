import { Metadata } from 'next';

import { Layout } from '@/modules/layout/default';
import { Checkout } from '@/modules/checkout';

export const metadata: Metadata = {
  title: 'Humanity - checkout',
  description: 'Slow down, or even, reverse your aging.',
  openGraph: {
    title: 'Humanity - cart',
    url: '',
    type: 'website',
    description: 'Slow down, or even, reverse your aging.',
  },
};

export default async function CheckoutPage() {
  return (
    <Layout showBackButton>
      <Checkout />
    </Layout>
  );
}

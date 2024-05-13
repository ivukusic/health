import { Layout } from '@/modules/layout/default';
import { Metadata } from 'next';
import { SelectDeliveryCountry } from '@/modules/selectDeliveryCountry';

export const metadata: Metadata = {
  title: 'Humanity - select deliver country',
  description: 'Slow down, or even, reverse your aging.',
  openGraph: {
    title: 'Humanity - select deliver country',
    url: '',
    type: 'website',
    description: 'Slow down, or even, reverse your aging.',
  },
};

export const getData = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export default async function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const data = await getData();

  return (
    <Layout showBackButton={false}>
      <SelectDeliveryCountry />
    </Layout>
  );
}

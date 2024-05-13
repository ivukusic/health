import { Layout } from '@/modules/layout/default';
import { Counter } from '@/modules/counter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Humanity - counter',
  description: 'Slow down, or even, reverse your aging.',
  openGraph: {
    title: 'Humanity - Stay healthy longer',
    url: '',
    type: 'website',
    description: 'Slow down, or even, reverse your aging.',
  },
};

export default async function HomePage() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div />
        <Counter />
        <div />
      </div>
    </Layout>
  );
}

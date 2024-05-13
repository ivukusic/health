import Image from 'next/image';

import { Layout } from '@/modules/layout/default';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Humanity - Stay healthy longer',
  description: 'Slow down, or even, reverse your aging.',
  openGraph: {
    title: 'Humanity - Stay healthy longer',
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
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div />
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div />
      </div>
    </Layout>
  );
}

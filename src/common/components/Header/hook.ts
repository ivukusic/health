import { useRouter } from 'next/navigation';

export const useHook = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return { handleBack };
};
